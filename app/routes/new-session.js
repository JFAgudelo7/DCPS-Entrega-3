import Route from '@ember/routing/route';

export default Route.extend({
  title: 'MarketUN | Ingresar',
  model: function(){
    return{
      admins: this.store.findAll('administradores')
    }
  }
});
