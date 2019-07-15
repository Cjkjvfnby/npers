import org.jetbrains.kotlin.gradle.tasks.Kotlin2JsCompile


group = "org.sa.npers"
version = "1.0-SNAPSHOT"

plugins {
    id("kotlin2js") version "1.3.41"
    idea
//    id("com.dorongold.task-tree") version "1.4"
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
        moduleKind = "plain"
        outputFile = "${projectDir}/web/output.js"
        sourceMap = true
    }
}


task<Copy>("assembleJsLib") {
    configurations.compile.get().resolve().forEach { file: File ->
        from(zipTree(file.absolutePath), {
            includeEmptyDirs = false
            include { fileTreeElement ->
                val path = fileTreeElement.path
                (path.endsWith(".js") || path.endsWith(".js.map")) && (path.startsWith("META-INF/resources/") ||
                        !path.startsWith("META-INF/"))
            }
        })
    }
    from(tasks.withType<ProcessResources>().map { it.destinationDir })
    into("web/lib")
}
tasks["build"].dependsOn(tasks["assembleJsLib"])
