const views = {
  tendencia: {
    index: "LENTE 01",
    title: "Tendencia",
    copy: "Una línea puede resumir un patrón general. En esta lámina es solo un trazo explicativo: no representa una relación medida.",
    chartClass: "view-tendencia",
    chartDescription: "Puntos decorativos sin escala ni valores físicos, con una guía de tendencia abstracta.",
    legend: '<i class="legend-line"></i> Tendencia esquemática',
  },
  relaciones: {
    index: "LENTE 02",
    title: "Relaciones",
    copy: "Una red puede mostrar conexiones entre ideas. Los enlaces de este dibujo son ilustrativos y no representan causas ni variables de campo.",
    chartClass: "view-relaciones",
    chartDescription: "Puntos y conexiones decorativos sin escala ni valores físicos, formando una red conceptual.",
    legend: '<i class="legend-line relation-legend"></i> Conexiones conceptuales',
  },
};

const chart = document.querySelector("#concept-chart");
const chartDescription = document.querySelector("#chart-desc");
const legend = document.querySelector("#chart-legend-mode");
const index = document.querySelector("#insight-index");
const title = document.querySelector("#insight-title");
const copy = document.querySelector("#insight-copy");
const buttons = document.querySelectorAll(".view-button");

for (const button of buttons) {
  button.addEventListener("click", () => {
    const view = views[button.dataset.view];
    if (!view) return;

    for (const otherButton of buttons) {
      const isSelected = otherButton === button;
      otherButton.classList.toggle("is-selected", isSelected);
      otherButton.setAttribute("aria-pressed", String(isSelected));
    }

    chart.classList.remove("view-tendencia", "view-relaciones");
    chart.classList.add(view.chartClass);
    chartDescription.textContent = view.chartDescription;
    legend.innerHTML = view.legend;
    index.textContent = view.index;
    title.textContent = view.title;
    copy.textContent = view.copy;
  });
}
