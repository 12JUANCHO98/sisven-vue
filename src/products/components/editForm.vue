<template>
    <div>
        <Form @submit="onSubmit" :validation-schema="schema">
            <div class="mb-3 justify-content-start">
                <label for="name" class="form-label">Nombre</label>
                <Field type="text" class="form-control" id="name" name="name" placeholder="Nombre"
                    :value="props.info.name" />
                <ErrorMessage name="name" class="text-danger" />
            </div>
            <div class="mb-3">
                <label for="price" class="form-label">Precio</label>
                <Field type="text" class="form-control" id="price" name="price" placeholder="Precio"
                    :value="props.info.price" />
                <ErrorMessage name="price" class="text-danger" />
            </div>
            <div class="mb-3">
                <label for="stock" class="form-label">Stock</label>
                <Field type="text" class="form-control" id="stock" name="stock" placeholder="Stock"
                    :value="props.info.stock" />
                <ErrorMessage name="stock" class="text-danger" />
            </div>
            <div class="mb-3">
                <label for="category_id" class="form-label">Categoría</label>
                <Field type="text" class="form-control" id="category_id" name="category_id" placeholder="Categoría"
                    :value="props.info.category_id" />
                <ErrorMessage name="category_id" class="text-danger" />
            </div>
            <div class="d-flex justify-content-end gap-2">
                <button type="button" class="btn btn-secondary" @click="emit('cancel')">Cancelar</button>
                <button type="submit" class="btn btn-primary">Guardar</button>
            </div>
        </Form>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { Product } from '@/products/types';
import schema from '@/products/schemas'

const emit = defineEmits<{
    (e: 'cancel'): void
    (e: 'save'): void
}>();

const props = defineProps<{ info: Product }>()

const onSubmit = (values: any) => {
    console.log('Valores del formulario:', values);
    axios.put(`http://127.0.0.1:8000/api/products/${props.info.id}`, values)
        .then(() => {
            emit('save')
        })
};
</script>