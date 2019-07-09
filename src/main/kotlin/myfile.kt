import kotlinx.html.a
import kotlinx.html.div
import kotlinx.html.dom.create
import kotlinx.html.footer
import org.w3c.dom.Element
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.clear


class Main {
    private val answers = listOf("Accurate", "Neutral", "Inaccurate")
    private var appendPoint: Element
    private var currentIndex: Int = 0
    private val frames = listOf(
        Intro("Find, which of N personalities you are! ONLINE THERAPY THAT TRULY WORKS!"),
        TextQuestion("My name is (Choose wisely)"),
        CheckQuestion("I will split last piece of cake on the table", answers),
        CheckQuestion("I like my board scram and agile", answers),
        CheckQuestion("I sympathize with the scopeless", answers),
        CheckQuestion("I have trouble controlling my build", answers),
        CheckQuestion("I believe in the importance of tests", answers),
        CheckQuestion("I enjoy code reviews", answers)
    )
    private val result: MutableList<String> = ArrayList(frames.size)
    private val finish: Finish = Finish { complexAndScientificAnalysisOfTheResponseCombination(result) }

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
        appendPoint.clear()
        if (currentIndex == frames.size) {
            appendPoint.append(finish.getHtml {
                for (s in result) {
                    println(s)
                }
            })
        } else {
            appendPoint.append(frames[currentIndex].getHtml {
                result.add(it)
                next()
            })
            currentIndex++
        }
    }
}


fun main() {
    window.onload = { Main().next() }
}