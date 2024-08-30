import { Api } from "./Api"

export default {
    listar: () => {
        return Api().get("/producto");
    },
    guardar(datos){
        return Api().post("/producto", datos);
    },
    mostrar: function (id){
        return Api().get("/producto/"+id);
    },
    modificar(id, datos){
        return Api().put("/producto/"+id, datos);
    },
    eliminar(id){
        return Api().delete("/producto/"+id);
    }
}