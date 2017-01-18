function remove(id) {
    fetch(`/articles/${id}/edit`,{
        method: 'DELETE',
           headers:{
                'Access-Control-Allow-Origin':'*'
                },
    }).then(function() {
        location.reload();
    });
}