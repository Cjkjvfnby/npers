import kotlinx.html.*
import kotlinx.html.dom.create
import kotlinx.html.js.onClickFunction
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLInputElement
import kotlin.browser.document


abstract class Frame {
    abstract fun getHtml(callback: (String) -> Unit): HTMLElement
    val SUBMIT = "Submit"
}


class Intro(private val text: String) : Frame() {
    override fun getHtml(callback: (String) -> Unit): HTMLElement {
        return document.create.div {
            p {
                +text
            }
            p("font-weight-lighter small") { +"Click me to continue." }
            onClickFunction = { callback("Started") }
        }
    }
}


class TextQuestion(private val question: String) : Frame() {

    override fun getHtml(callback: (String) -> Unit): HTMLElement {
        return document.create.form {
            div("form-group") {
                label("font-weight-bold") { +question }
                input(type = InputType.text, classes = "form-control") { attributes.put("id", "goga") }
                button(classes = "form-control") {
                    +SUBMIT
                    onClickFunction = {
                        val input = document.getElementById("goga") as HTMLInputElement
                        callback(input.value)
                    }
                }
            }
        }
    }
}


class CheckQuestion(private val question: String, private val items: List<String>) : Frame() {
    override fun getHtml(callback: (String) -> Unit): HTMLElement {


        return document.create.form {
            label("font-weight-bold") { +question }
            for (item in items) {
//            TODO("make id from the name")
                div("form-check text-left") {
                    input(type = InputType.checkBox, classes = "form-check-input") {
                        id = item
                    }
                    label("form-check-label") { +item }
                }
            }
            button(classes = "form-control") {
                +SUBMIT
                onClickFunction = {
                    callback(items.map {
                        Pair(it, document.getElementById(it) as HTMLInputElement)
                    }.filter { it.second.checked }.joinToString(separator = ",") { it.first })

                }
            }
        }
    }
}


class Finish(val analyser: () -> String) : Frame() {
    override fun getHtml(callback: (String) -> Unit): HTMLElement {
        return document.create.div {
            p { +"Thank you. It will change your life." }
            p("lead text-primary font-weight-bold") { +analyser() }
            p("font-weight-light small") {
                a {
                    href = "https://github.com/Cjkjvfnby/npers/blob/master/src/main/kotlin/analysis.kt"
                    +"Your responses are very important to us."
                }
            }
        }
    }
}
