const $articulo = document.getElementById("articulo");

let texto = `<h1>AJAX - XMLHttpRequest</h1>`;
$articulo.innerHTML = texto;

(() => {
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById("xhr"),
        $fragment = document.createDocumentFragment()

    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            console.log("Exito");

            let json = JSON.parse(xhr.responseText)
            console.log(json)

            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.id}: ${el.name} -- ${el.email}`;
                $fragment.appendChild($li)
            })

            $xhr.appendChild($fragment);
        } else {
            console.log("Error");
            let message = xhr.statusText || "mi querido amigo";
            $xhr.innerHTML = `Error ${message}`
        }
    })

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    xhr.send();
})()
