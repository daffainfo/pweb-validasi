function validateForm() {
    var nama = document.forms["validasiForm"]["nama"].value;
    if (nama == "" || nama == null) {
        alert("Form nama belum diisi");
        return false;
    }

    var nrp = document.forms["validasiForm"]["nrp"].value;
    if (nrp == "" || nrp == null) {
        alert("Form NRP belum diisi");
        return false;
    }

    var domisili = document.forms["validasiForm"]["domisili"].value;
    if (domisili == "" || domisili == null) {
        alert("Form domisili belum diisi");
        return false;
    }

    if (document.forms["validasiForm"]["departemen"].selectedIndex < 1) {
        alert("Form departemen belum diisi");
        return false;
    }
alert("Data sudah disubmit");
}