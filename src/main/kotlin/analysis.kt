fun complexAndScientificAnalysisOfTheResponseCombination(result: List<String>): String {
    val name = result[1]
    val personality = if (name.isBlank()) {
        "Eugene"
    } else {
        name
    }
    return "Your personality is: $personality"
}