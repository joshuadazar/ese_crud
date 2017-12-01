Vue.component('menup', {
  props: ['nombre'],
 template:
 `
 <header class=" z-depth-2 green white-text">
    <div class="row">
    <div class="col s12 l2 center-align">
      <br>
      <a href="#" >
      <img src="imagenes/logo.png" class=" responsive-img" width="100px" alt="logo gestualeap">
      </a>
    </div>
      <div class="col offset-l1 l8 center hide-on-med-and-down">
      <div class="section"></div>
      <h5 class="animated fadeIn">Panel de Control</h5>
      </div>
    </div>
    <nav class="animated bounceInDown light-green">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo center hide-on-large-only">{{nombre}}</a>
        <a href="#" data-activates="mobile-demo" class="button-collapse right"><i class="material-icons">menu</i></a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li><a href="#" >Listar usuarios</a></li>
          <li class="animado"><a>Crear usuarios</a></li>
          <li class="imagen"><a>Cerrar Sesión</a></li>
        </ul>
        <ul class="side-nav green " id="mobile-demo">
        <li ><a href="#" class="white-text z-depth-1 hoverable listar">Listar usuarios</a></li>
        <li ><a href="#" class="white-text z-depth-1 hoverable">Crear usuarios</a></li>
        <li ><a href="#" class="white-text z-depth-1 hoverable">Cerrar Sesión</a></li>
      </ul>
      </div>
    </nav>
</header>


 `,
 mounted() {
    $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens
      onOpen: function(el) { /* Do Stuff* */ },
      onClose: function(el) { /* Do Stuff* */ },
        })

      $(".listar").click(function(){
        $("table").toggle()
      })
  },
}),

Vue.component('pie', {
	template:
	`
    <footer class="page-footer green">
      
          <!-- inferior -->
      <div class="row green ">
        <div class="col s12 center-align white-text">
          <h5>ESE © 2018</h5>
          
        </div>
        
      </div>
    </footer>
	`
}),




new Vue({
	el:'modelo',
  components: {
   'vuetable-pagination': Vuetable.VuetablePagination
  },
	data (){
    return{
      posts:[],
      nombre:'Panel de Control',
             
    }
  },

   


 
mounted(){
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((respuesta)=>{
        this.posts= respuesta.data;
      })
      $('.tooltipped').tooltip();
    },

     
    
})


