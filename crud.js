document.addEventListener('DOMContentLoaded', () => {
    const dataTable = document.getElementById('data-table');
    const formContainer = document.getElementById('form-container');
    const crudForm = document.getElementById('crud-form');
    const addDataBtn = document.getElementById('addDataBtn');
    const formTitle = document.getElementById('form-title');
    const dataIdInput = document.getElementById('data-id');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const roleInput = document.getElementById('role');
    const joinDateInput = document.getElementById('joinDate');

    let data = []; // Simulasi data

    // Fetch initial data (Simulasi)
    function loadData() {
        data = [
            { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', joinDate: '2023-01-10' },
            { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', joinDate: '2023-03-15' },
            { id: 3, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', joinDate: '2023-03-15' }
        ];
        renderTable();
    }

    // Render data ke tabel
    function renderTable() {
        dataTable.innerHTML = '';
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.role}</td>
                <td>${item.joinDate}</td>
                 <td>
                     <button onclick="editData(${item.id})">Edit</button>
                    <button onclick="deleteData(${item.id})">Hapus</button>
                </td>
                
            `;
            dataTable.appendChild(row);
        });
    }

    // Tambah Data
    addDataBtn.addEventListener('click', () => {
        formTitle.textContent = 'Add new block';
        crudForm.reset();
        dataIdInput.value = '';
        formContainer.style.display = 'block';
    });

    // Simpan Data (Create/Update)
    crudForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const id = dataIdInput.value;
        const name = nameInput.value;
        const email = emailInput.value;
        const role = roleInput.value;
        const joinDate = joinDateInput.value;

        if (id) {
            // Update Data
            const item = data.find(d => d.id === parseInt(id));
            if (item) {
                item.name = name;
                item.email = email;
                item.role = role;
                item.joinDate = joinDate;
            }
        } else {
            // Create Data
            const newId = data.length ? data[data.length - 1].id + 1 : 1;
            data.push({ id: newId, name, email, role, joinDate });
        }

        renderTable();
        formContainer.style.display = 'none';
    });

    // Edit Data
    window.editData = function (id) {
        const item = data.find(d => d.id === id);
        if (item) {
            dataIdInput.value = item.id;
            nameInput.value = item.name;
            emailInput.value = item.email;
            roleInput.value = item.role;
            joinDateInput.value = item.joinDate;
            formTitle.textContent = 'Edit Pengguna';
            formContainer.style.display = 'block';
        }
    };

    // Hapus Data
    window.deleteData = function (id) {
        data = data.filter(d => d.id !== id);
        renderTable();
    };

    // Load initial data
    loadData();
});