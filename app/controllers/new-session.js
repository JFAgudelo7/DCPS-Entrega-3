import Controller from '@ember/controller';

var valid = false;

export default Controller.extend({
  actions: {
    signIn(email,password){
      this.get('model.admins').forEach((admin) => {
        if (admin.get('email') == this.email & admin.get('password') == this.password){
          localStorage.setItem('email', this.email);
          localStorage.setItem('password', this.password);
          //alert("Bienvenido a MarketUN");
          this.transitionToRoute('reportes');
          valid = true;
          valid.save();
        }
      });
      if (valid == false){
        alert("Datos Inválidos");
      }
    }
  }
});
