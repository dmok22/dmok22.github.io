window.MathJax={tex:{inlineMath:[["$","$"],["\\(","\\)"]],displayMath:[["$$","$$"],["\\[","\\]"]],processEscapes:!0,processEnvironments:!0}},document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&document.querySelectorAll("pre>code.language-pseudocode").forEach((e=>{const t=e.textContent,n=e.parentElement.parentElement;let d=document.createElement("pre");d.classList.add("pseudocode");const a=document.createTextNode(t);d.appendChild(a),n.appendChild(d),n.removeChild(e.parentElement),pseudocode.renderElement(d)}))}));