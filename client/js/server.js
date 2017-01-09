function remove(id) {
    fetch(`/articles/${id}/edit`,{
        method: 'DELETE'
    }).then(function() {
        location.reload();
    });
}