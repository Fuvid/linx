
const container = document.getElementById("maincontainer");
boxes.boxes.forEach(element => {
    const box = document.createElement("div");
    box.className = "box";

    const title = document.createElement("h2");
    var titlename = element.title;
    if (element.icon) {
        const icon = document.createElement("i");
        icon.className = "material-icons";
        icon.appendChild(document.createTextNode(element.icon));
        titlename = " " + titlename;
        title.appendChild(icon);
    }
    const titletext = document.createTextNode(titlename);

    title.appendChild(titletext);
    box.appendChild(title);
  
    element.links.forEach(link => {
        const a = document.createElement("a");
        a.setAttribute("href", link.link + "");
        const div = document.createElement("div");
        div.className = "button";
        const name = document.createTextNode(link.name + "");
        console.log(link.name);
        div.appendChild(name);
        a.appendChild(div);
        box.appendChild(a);
    });
    container.appendChild(box);
});

//open in new tab
const links = document.querySelectorAll("a");
links.forEach((link, index) => {
    //target="_blank" rel="noopener noreferrer"
    console.log(link);
    link.setAttribute('target', `_blank`);
    link.setAttribute('rel', `noopener noreferrer`);
});