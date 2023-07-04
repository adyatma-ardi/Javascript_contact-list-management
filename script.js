// inisialisasi array untuk menyimpan daftar kontak
let contactList = [];

// fungsi untuk menambahkan kontak baru ke daftar kontak
function addContact(name, email, phone) {
    let contact = {
        name,
        email,
        phone
    };
    contactList.push(contact);
}

// fungsi untuk menghapus kontak dari daftar berdasarkan index
function deleteContact(index) {
    if (index >= 0 && index < contactList.length) {
        contactList.splice(index, 1);
    }
}

// fungsi untuk menampilkan daftar kontak
function showContactList() {
    if (contactList.length === 0) {
        console.log('Daftar Kontak Kosong!');
    } else {
        console.log('Daftar Kontak :');
        for (let i = 0; i < contactList.length; i++) {
            let contact = contactList[i];
            console.log(`nama: ${contact.name}, email: ${contact.email}, phone : ${contact.phone}`);
        }
    }
}

// menambahkan kontak ke daftar
addContact("Achmad Adyatma Ardi", "achmad@example.com", "1234");
addContact("Qonita Dwi Wulandari", "qonita@example.com", "4321");

// menampilkan daftar kontak
// showContactList();

// menghapus kontak dengan indeks 1
deleteContact(1);

// menampilkan daftar kontak setelah penghapusan
showContactList();