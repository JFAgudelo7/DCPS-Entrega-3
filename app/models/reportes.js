import DS from 'ember-data';

export default DS.Model.extend({
    descripcion: DS.attr('string'),
    nombre: DS.attr('string'),
    tipo:DS.attr('string')
});
