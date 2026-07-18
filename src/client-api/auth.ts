import axiosInstance from "@/libs/axiosInstance";
import {
  ForgotPasswordRequest,
  LoginRequest,
  RegisterRequest,
  ResetPasswordRequest,
} from "@/types/auth.types";

export const register = (data: RegisterRequest) => axiosInstance.post("/auth/signup", data);

export const login = (data: LoginRequest) => axiosInstance.post("/auth/signin", data);

export const forgotPassword = (data: ForgotPasswordRequest) => axiosInstance.post("/auth/forgot-password", data);

export const resetPassword = (data: ResetPasswordRequest) => axiosInstance.post("/auth/reset-password", data);

export const getProfile = () => axiosInstance.get("/auth/profile");

export const logout = () => axiosInstance.post("/auth/logout");



// // === USER MANAGEMENT ===
// export const createUser = data => axiosInstance.post('/auth/createUser', data)
// export const getAllUsers = () => axiosInstance.get('/auth/getAllUsers')
// export const getUser = () => axiosInstance.get('/auth/getUser')
// export const getCurrentUser = () => axiosInstance.get('/auth/getCurrentUser')
// export const getUserById = id => axiosInstance.get(`/auth/getUserById/${id}`)
// export const deleteUserById = id => axiosInstance.delete(`/auth/deleteUserById/${id}`)

// export const editUserById = (id, data) =>
//   axiosInstance.put(`/auth/editUserById/${id}`, data, {
//     headers: { 'Content-Type': 'multipart/form-data' }
//   })

// // === PROFILE ===
// export const getProfile = () => axiosInstance.get('/auth/getProfile')
// export const getProfileById = id => axiosInstance.get(`/auth/getProfileById/${id}`)
// export const updateProfile = data =>
//   axiosInstance.put('/auth/editProfileById', data, {
//     headers: { 'Content-Type': 'multipart/form-data' }
//   })

// // === ROLES & PERMISSIONS ===
// export const getRoles = () => axiosInstance.get('/auth/roles')
// export const getRoleById = id => axiosInstance.get(`/auth/roles/${id}`)
// export const createRole = data => axiosInstance.post('/auth/roles', data)
// export const updateRoleById = (id, data) => axiosInstance.put(`/auth/roles/${id}`, data)
// export const deleteRoleById = id => axiosInstance.delete(`/auth/roles/${id}`)
// export const getAllPermissions = () => axiosInstance.get('/auth/permissions')
// export const getPermissionsByRole = roleId => axiosInstance.get(`/auth/permissions/role/${roleId}`)
// export const updatePermissions = (roleId, permissions) =>
//   axiosInstance.post('/auth/permissions/update', { roleId, permissions })
// export const getModules = () => axiosInstance.get('/auth/permissions/modules')

// // === WAREHOUSE MANAGEMENT ===
// export const getWarehouse = () => axiosInstance.get(`/auth/getWarehouse`)
// export const getWarehouseDropdown = () => axiosInstance.get(`/auth/getAllWarehouses`)
// export const getWarehouseById = id => axiosInstance.get(`/auth/getWarehouseById/${id}`)
// export const createWarehouse = data => axiosInstance.post(`/auth/createWarehouse/create`, data)
// export const updateWarehouseById = (id, data) => axiosInstance.put(`/auth/editWarehouseById/${id}`, data)
// export const deleteWarehouse = id => axiosInstance.delete(`/auth/deleteWarehouseById/${id}`)

// // === PRODUCT INVENTORY ===
// export const getProduct = params => axiosInstance.get('/auth/getProduct', { params })
// export const getProductById = id => axiosInstance.get(`/auth/getProductById/${id}`)
// export const createProduct = data => axiosInstance.post(`/auth/createProduct`, data)
// export const deleteProduct = id => axiosInstance.delete(`/auth/deleteProductById/${id}`)
// export const bulkImportSubmit = formData => axiosInstance.post('/auth/bulkImportExcel', formData)
// export const updateProductById = (prod_id, data) => axiosInstance.put(`/auth/editProductById?prod-id=${prod_id}`, data)

// // === DASHBOARD & NAVIGATION ===
// export const getDashboard = () => axiosInstance.get(`/auth/getDashboard`)
// export const getMenu = () => axiosInstance.get(`/auth/menu`)
// export const getAllMenuItems = () => axiosInstance.get(`/auth/menu/All`)
