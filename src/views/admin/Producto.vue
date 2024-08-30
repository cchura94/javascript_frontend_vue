<template>
    <div class="card">

        <Button label="Nuevo producto" @click="visible = true" />

<Dialog v-model:visible="visible" modal header="Nuevo Producto" :style="{ width: '30rem' }">
    <span class="text-surface-500 dark:text-surface-400 block mb-8">Ingrese datos de Producto.</span>
    <div class="flex items-center gap-4 mb-4">
        <label for="nom" class="font-semibold w-24">NOMBRE</label>
        <InputText id="nom" class="flex-auto" autocomplete="off" v-model="producto.nombre" />
    </div>
    <div class="flex items-center gap-4 mb-8">
        <label for="pr" class="font-semibold w-24">PRECIO</label>
        <InputText id="pr" class="flex-auto" autocomplete="off"  v-model="producto.precio"/>
    </div>
    <div class="flex items-center gap-4 mb-4">
        <label for="c" class="font-semibold w-24">CANTIDAD</label>
        <InputText id="c" class="flex-auto" autocomplete="off" v-model="producto.cantidad" />
    </div>
    <div class="flex items-center gap-4 mb-4">
        <label for="desc" class="font-semibold w-24">DESCRIPCION</label>
        <InputText id="desc" class="flex-auto" autocomplete="off" v-model="producto.descripcion" />
    </div>
    <div class="flex justify-end gap-2">
        <Button type="button" label="Cancelar" severity="secondary" @click="visible = false"></Button>
        <Button type="button" label="Guardar Producto" @click="guardarProducto()"></Button>
    </div>
</Dialog>

        <DataTable :value="productos" tableStyle="min-width: 50rem" size="small" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]">
            <Column field="nombre" sortable header="NOMBRE"></Column>
            <Column field="precio" header="PRECIOS"></Column>
            <Column field="cantidad" header="STOCK"></Column>
            <Column field="descripcion" header="DETALLE"></Column>
        </DataTable>
    </div>
    <h1>Productos</h1>

    {{ producto }}
    <div>
        <label for="">Ingrese Nombre</label>
        <input type="text" v-model="producto.nombre">
        <br>
        <label for="">Ingrese Precio</label>
        <input type="text" v-model="producto.precio">
        <br>
        <label for="">Ingrese Cantidad</label>
        <input type="text" v-model="producto.cantidad">
        <br>
        <label for="">Ingrese Descripción</label>
        <input type="text" v-model="producto.descripcion">
        <br>
        <button @click="guardarProducto()">Guardar</button>
    </div>

    

    <table border="1">
        <thead>
            <tr>
                <th>NOMBRE</th>
                <th>PRECIO</th>
                <th>CANTIDAD</th>
                <th>DESCRIPCION</th>
                <th>ACCION</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="prod in productos" :key="prod._id">
                <td>{{ prod.nombre }}</td>
                <td>{{ prod.precio }}</td>
                <td>{{ prod.cantidad }}</td>
                <td>{{ prod.descripcion }}</td>
                <td>
                    <button @click="editarProducto(prod)">editar</button>
                    <button>eliminar</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { ref, onMounted } from "vue"
import productoService from "./../../services/producto.service"

const productos = ref([])
const producto = ref({})
const visible = ref(false)

onMounted(() => {
    obtenerProductos()
});

async function obtenerProductos(){
    try {
        const {data} = await productoService.listar()
        productos.value = data
    } catch (error) {
        alert("Ocurrió un error al recuperar los datos")
    }
}

async function guardarProducto(){
    if(producto.value._id){

        try {
            await productoService.modificar(producto.value._id, producto.value)
            obtenerProductos();
            producto.value = {}
            visible.value = false
        } catch (error) {
            alert("Ocurrió un error al recuperar los datos")
        }

    }else{
        try {
            await productoService.guardar(producto.value)
            obtenerProductos();
            producto.value = {}

            visible.value = false

        } catch (error) {
            alert("Ocurrió un error al recuperar los datos")
        }

    }

}

function editarProducto(prod){
    producto.value = prod
    visible.value = true
}
</script>