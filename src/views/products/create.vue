<script setup lang="ts">

//import ref dari vue
import { ref } from "vue";

//import useRouter dari vue-router
import { useRouter } from "vue-router";

//import Api dari folder api
import Api from "../../api";

// Interface Errors
interface Errors {
    name?: string[];
    description?: string[];
    price?: string[];
    stock?: string[];
    kategori_id?: string[];
}

// State untuk form
const name = ref("");
const description = ref("");
const price = ref("");
const stock = ref("");
const kategori_id = ref("");

// State untuk error
const errors = ref<Errors>({});

// Router instance
const router = useRouter();

// Handle perubahan file
// const handleFileChange = (event: Event) => {
//     const target = event.target as HTMLInputElement;
//     if (target.files && target.files[0]) {
//         image.value = target.files[0];
//     }
// };

// Handle submit form
const storeProduct = async () => {

    //inisialisasi form data
    const formData = new FormData();

    //append data ke form data
    formData.append("name", name.value);
    formData.append("description", description.value);
    formData.append("price", price.value);
    formData.append("stock", stock.value);
    formData.append("kategori_id", kategori_id.value);

    try {

        //send data ke api
        await Api.post("/api/product", formData);

        //redirect ke halaman products
        router.push("/product");

    } catch (error: any) {

        //set error ke state
        errors.value = error.response.data;
    }
};
</script>

<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded-3 shadow">
                    <div class="card-body">
                        <form @submit.prevent="storeProduct">
                            <div class="mb-3">
                                <label class="form-label fw-bold">Name</label>
                                <input type="text" v-model="name" class="form-control" placeholder="Name Product" />
                                <div v-if="errors.name" class="alert alert-danger mt-2">{{ errors.name[0] }}</div>
                            </div>

                            <div class="mb-3">
                                <label class="form-label fw-bold">Description</label>
                                <textarea v-model="description" class="form-control" rows="5"
                                    placeholder="Description Product"></textarea>
                                <div v-if="errors.description" class="alert alert-danger mt-2">{{ errors.description[0]
                                    }}</div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label fw-bold">Price</label>
                                        <input type="number" v-model="price" class="form-control"
                                            placeholder="Price Product" />
                                        <div v-if="errors.price" class="alert alert-danger mt-2">{{ errors.price[0] }}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label fw-bold">Stock</label>
                                        <input type="number" v-model="stock" class="form-control"
                                            placeholder="Stock Product" />
                                        <div v-if="errors.stock" class="alert alert-danger mt-2">{{ errors.stock[0] }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                    <div class="mb-3">
                                        <label class="form-label fw-bold">No Kategori Product</label>
                                        <input type="number" v-model="kategori_id" class="form-control"
                                            placeholder="No Product" />
                                        <div v-if="errors.kategori_id" class="alert alert-danger mt-2">{{ errors.kategori_id[0] }}
                                        </div>
                                    </div>
                                </div>

                            <button type="submit" class="btn btn-md btn-primary rounded-5 shadow border-0">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
