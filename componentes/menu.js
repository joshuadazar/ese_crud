Vue.component('mi-menu', {
  template: `
	<nav class=" orange darken-2">
    <div class=nav-wrapper><a href=#! class="brand-logo right"><i class=" logo material-icons orange-text text-darken-2 white circle hoverable hide-on-small-only">local_pizza</i>Pizzería La Ocañerita</a>
        <!-- ,menu  para pc --><a href=# data-activates=mobile-demo class=button-collapse><i class="material-icons  hoverable">menu</i></a>
        <ul class="left hide-on-med-and-down">
            <li class="z-depth-2 orange darken-4"><a href=index.html><i class="material-icons left">home</i>Inicio</a></li>
            <li class="z-depth-2 orange darken-4"><a href=productos.html>Sabores<i class="material-icons right">camera</i></a></li>
            <li class="z-depth-2 orange darken-4"><a href=contacto.html>Pedidos <span><i class="material-icons right">add_shopping_cart</i></span></a></li>
        </ul>
        <ul class=side-nav id=mobile-demo>
            <li><a href=index.html>Inicio</a></li>
            <li><a href=productos.html>Sabores</a></li>
            <li><a href=contacto.html>Pedidos</a></li>
        </ul>
    </div>
	</nav>
  `
}),
// Galería de imágenes
Vue.component('galeria', {
 template:  `

				
 `
}),
// Pie de Página
Vue.component('pie', {
 template:  `
    <footer class="page-footer orange darken-4">
      
      <div class="footer-copyright">
        <div class="container">
        Pizzería La Ocañerita © 2017
        <a class="grey-text text-lighten-4 right" href="#!">Síguenos en Redes Sociales <i class="material-icons right">thumb_up</i> </a>
        </div>
      </div>
    </footer>
 `
}),

// descripción Sabores

Vue.component('pollo', {
 template:  `
    <div class="animated fadeInRight  col s12 z-depth-2 hoverable">
    	<img src="imagenes/pollo.jpg" width="400px" class="responsive-img" alt="">
    	<p>Esta sensacional Pizza cuenta con los estandares de sabor y finos ingredientes que acompañe una buena reunión de amigos, trabajo o familia.</p>

    </div>
 `
}),

Vue.component('hawaiana', {
 template:  `
    <div  class=" animated fadeInRight col s12 z-depth-2 hoverable">
    	<img src="imagenes/hawaiana.jpg" width="400px" class="responsive-img" alt="">
    	<p>Esta sensacional Pizza cuenta con los estandares de sabor y finos ingredientes que acompañe una buena reunión de amigos, trabajo o familia.</p>

    </div>
 `
}),

Vue.component('tropical', {
 template:  `
    <div  class="animated fadeInRight col s12 z-depth-2 hoverable">
    	<img src="imagenes/pizza-tropical.jpg" width="400px" class="responsive-img" alt="">
    	<p>Esta sensacional Pizza cuenta con los estandares de sabor y finos ingredientes que acompañe una buena reunión de amigos, trabajo o familia.</p>

    </div>
 `
}),

// create a root instance
new Vue({
  el: 'contenido',
  data:{
  	nombre:'joshua',
  	descripcion:'pollo',
  	componente:'galeria',
  },
methods:{
	activar(dato){
		this.descripcion= dato;
	}
},

})



$(".carousel").carousel(); $(".carousel>a>img").css("height","150px")


