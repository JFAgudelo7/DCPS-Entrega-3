import Controller from '@ember/controller';

export default Controller.extend({
    actions: {

        eliminarReporte(nombre) {
            this.get('model.reportes').forEach((reporte) => {
                if (reporte.get('nombre') == nombre) {
                    this.get('store').findRecord('reportes', nombre).then(function (post) {
                        post.deleteRecord();
                        post.get('isDeleted');
                        post.save();
                        alert('Reporte eliminado');
                    });
                }                
            });
        },

        eliminarPublicacion(nombre) {
            this.get('model.reportes').forEach((reporte) => {
                if (reporte.get('nombre') == nombre) {
                    this.get('store').findRecord('publicaciones', nombre).then(function (post) {
                        post.deleteRecord();
                        post.get('isDeleted');
                        post.save();

                    });
                    this.get('store').findRecord('reportes', nombre).then(function (post) {
                        post.deleteRecord();
                        post.get('isDeleted');
                        post.save();
                        alert('Publicación y Reportes han sido eliminados');
                    });
                }

            });
        },
    }
});

