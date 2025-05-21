  <div class="container">
        <div class="d-flex justify-content-between align-items-center">
            <h1>Listado de compradores</h1>
            <button type="button" class="btn btn-success">
                <FontAwesomeIcon :icon="faPlus" />
            </button>
        </div>
@@ -31,40 +31,77 @@
                    <td>{{ customer.phone_number }}</td>
                    <td>{{ customer.email }}</td>
                    <td class="d-flex justify-content-evenly gap-2">
                        <button type="button" class="btn btn-danger">
                            <i class="fa fa-trash" aria-hidden="true"></i>
                            <FontAwesomeIcon :icon="faTrash" />
                        </button>
                        <button type="button" class="btn btn-warning">
                            <FontAwesomeIcon :icon="faPencil" />
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>






</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Customer } from '@/customers/types';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


import {faTrash, faPencil, faPlus} from '@fortawesome/free-solid-svg-icons'



const customers = ref<Customer[]>([]);

onMounted(() => {
    axios.get('http://127.0.0.1:8000/api/customers')
        .then((response) => {
            customers.value = response.data;
        })
        .catch((error) => {
            console.error(error);
        });




})

</script>















<style scoped></style>