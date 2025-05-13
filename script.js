javascript
function ajouterAuPanier(nom,prix) {
	let panier = JSON.parse(localStrorage.getltem('panier')) || [];
	panier.push({nom:nom,prix:prix});
	localStrorage.setltem('panier',JSON.stringify(panier));
	alter(nom+"ajouté au panier !");
}
function viderPanier() {
	localStrorage.removeltem('panier');
	alter("Panier vidé !");
	location.reload();//recharge la page
}
document.addEventListener("OMContentloaded", ()=>{
	const elements = document.querySelectorAll(".fade-in");
	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry =>{
			if(entries.isIntersection){
				entry.target.classList.add("Visible");
			}
		});
	},{threshold: 0.1});
	elements.forEach(el => observer.observe(el));
});
//Affichage dans panier.html
const listePanier=document.getElementsByld("panier-items");
if (listePanier) {
	const panier=JSON.parse(localStrorage.getltem("panier")) || [];
	if(panier.length===0){
		listePanier.innerHTML="<p>Votre panier est vide pour l'instant.</p>";
	}
	else{
		listePanier.innerHTML="<ul>"+panier.map( item=> <li>{item}</li> ).join("")+</ul>;
	}
}
document.addEventListener("OMContentloaded", ()=>{
	const boutons = document.querySelectorAll(".add-to-cart");
	boutons.forEach(btn => {
		btn.addEventListener("click",()=>{
			const nom=btn.getAttribute("data-nom");
			let panier=JSON.parse(localStrorage.getltem("panier")) || [];
			panier.push(nom);
			localStrorage.setltem("panier",JSON.stringify(panier));
			alert("${nom}" ajouté au panier !);
		});
	});