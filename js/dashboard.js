


const lawyer = JSON.parse(localStorage.getItem("lawyer") || "null");

if (lawyer && lawyer.name) {
    document.getElementById("welcomeName").textContent =
        "Welcome back, " + lawyer.name + "!";

    document.getElementById("sideName").textContent = lawyer.name;
    document.getElementById("topName").textContent = lawyer.name;

    const initial = lawyer.name.charAt(0).toUpperCase();

    document.getElementById("sideAvatar").textContent = initial;
    document.getElementById("topAvatar").textContent = initial;
    document.getElementById("bannerAvatar").textContent = initial;
}