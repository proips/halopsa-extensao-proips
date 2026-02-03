// criar item no menu de contexto ao instalar
chrome.runtime.onInstalled.addListener(() => {
	chrome.contextMenus.create({
		id: "abrirHalo",
		title: "Abrir ticket em nova guia",
		contexts: ["selection"]
	});
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
	if (info.menuItemId === "abrirHalo") {
		// remove espaços extras
		const numSelecionado = info.selectionText.trim();
		// regex: 
		// ^ -> inicio da linha
		// \d+ -> um ou + digitos
		// $ -> fim da linha
		const ehNumero = /^\d+$/.test(numSelecionado);

		if (ehNumero) {
			const url = `https://proips.halopsa.com/tickets?&id=${numSelecionado}`;
			// abre uma nova aba com o link
			chrome.tabs.create({ url: url });

		} else {
			console.log("seleção invalida: " + selectedText);
		}
	}
});
