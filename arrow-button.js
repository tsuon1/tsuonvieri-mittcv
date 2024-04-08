function toggleExpand(element) {
    // Hittar närmaste expanderbara innehåll till knappen som klickats
    var content = element.nextElementSibling;
    while(content && !content.classList.contains("expandable-content")) {
        content = content.nextElementSibling;
    }

    // Kontrollerar om innehållet redan är expanderat
    if (content) {
        const isExpanded = content.style.display === 'block';
        // Visar eller döljer det expanderbara innehållet baserat på dess nuvarande tillstånd
        content.style.display = isExpanded ? 'none' : 'block';

        // Växlar 'expanded' klassen för att hantera rotation av pilbilden
        element.classList.toggle('expanded');
    }
}
