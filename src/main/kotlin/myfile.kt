import kotlinx.html.a
import kotlinx.html.div
import kotlinx.html.dom.create
import kotlinx.html.footer
import org.w3c.dom.Element
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.clear


class Main {
    private var appendPoint: Element
    private val answerChoices = listOf("Accurate", "Neutral", "Inaccurate")
    private val resultContainer: MutableList<String> = ArrayList()
    private val framesIterator = listOf(
        Intro("Find, which of N personalities you are! ONLINE THERAPY THAT TRULY WORKS!"),
        TextQuestion("My name is (Choose wisely)"),
        CheckQuestion("I will split last piece of cake on the table", answerChoices),
        CheckQuestion("I like my board scram and agile", answerChoices),
        CheckQuestion("I sympathize with the scopeless", answerChoices),
        CheckQuestion("I have trouble controlling my build", answerChoices),
        CheckQuestion("I believe in the importance of tests", answerChoices),
        CheckQuestion("I enjoy code reviews", answerChoices),
        Finish { complexAndScientificAnalysisOfTheResponseCombination(resultContainer) }
    ).iterator()

    init {
        val around = document.create.div("d-flex align-items-center h-100 bg-secondary") {
            div("container h-50 bg-light d-flex align-items-center justify-content-center") {
                div("row align-items-center") {
                    div("col mx-auto w-50 p-3 text-center") {
                        attributes["id"] = "appendPoint"
                    }
                }
            }
        }

        val footer = document.create.footer("bg-secondary text-white-50") {
            div("container text-center ") {
                +"© 20NN Copyright: "
                a(
                    "https://github.com/cjkjvfnby/npers"
                ) {
                    +"GitHub link"
                }
            }
        }
        document.body!!.append(around)
        document.body!!.append(footer)
        appendPoint = document.getElementById("appendPoint")!!
    }

    fun next() {
        if (!framesIterator.hasNext()) {
            return
        }
        appendPoint.clear()
        appendPoint.append(
            framesIterator.next().getHtml {
                resultContainer.add(it)
                next()
            }
        )
    }
}


fun main() {
    window.onload = { Main().next() }
}