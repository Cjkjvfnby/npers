import org.jetbrains.kotlin.gradle.tasks.Kotlin2JsCompile


group = "org.sa.npers"
version = "1.0-SNAPSHOT"

plugins {
    id("org.jetbrains.kotlin.js") version "1.3.41"
    idea
}

dependencies {
    compile(kotlin("stdlib-js"))
    compile("org.jetbrains.kotlinx:kotlinx-html-js:0.6.12")
}


repositories {
    mavenCentral()
    maven("http://dl.bintray.com/kotlin/kotlinx.html/")
}


tasks.withType<Kotlin2JsCompile> {
    kotlinOptions {
        moduleKind = "commonjs"
        outputFile = "${projectDir}/web/output.js"
    }
}



//task assembleWeb(type: Sync) {
//    configurations.compile.each { File file ->
//        copy {
//            includeEmptyDirs = false
//            from zipTree(file.absolutePath)
//            into "${projectDir}/web/lib"
//            include { fileTreeElement ->
//                def path = fileTreeElement.path
//                        path.endsWith(".js") && (path.startsWith("META-INF/resources/")  ||
//                        !path.startsWith("META-INF/"))
//            }
//        }
//    }
//}

//assemble.dependsOn assembleWeb


tasks.register<Copy>("copyOutput") {
    from("$buildDir/reports")
    include("*.pdf")
    into("$buildDir/toArchive")
}

