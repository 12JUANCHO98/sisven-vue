<template>
    <div>
        <Form @submit="onSubmit" :validation-schema="schema">
            <div class="mb-3 justify-content-start">
                <label for="name" class="form-label">Nombre</label>
                <Field type="text" class="form-control" id="name" name="name" placeholder="Nombre" />
                <ErrorMessage name="name" class="text-danger" />
            </div>
            <div class="mb-3">
                <label for="observation" class="form-label">Observación</label>
                <Field type="text" class="form-control" id="observation" name="observation" placeholder="Observación" />
                <ErrorMessage name="observation" class="text-danger" />
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
import schema from '@/paymodes/schemas';

const emit = defineEmits<{
    (e: 'cancel'): void
    (e: 'save'): void
}>();

const onSubmit = (values: any) => {
    console.log('Valores del formulario:', values);
    axios.post('http://127.0.0.1:8000/api/payModes', values)
        .then(() => {
            emit('save')
        })
};
</script>