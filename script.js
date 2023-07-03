function volume_sphere() {
    let r=document.getElementById("radius").value;
	let v=((4/3)*3.14*r*r*r);
	 document.getElementById("volume").value = v;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
