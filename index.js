

function show_add_group_modal() {

    const main = document.getElementsByTagName( "main" );
    const add_group_modal = document.getElementById( "add_group_modal" );

    main.classList.add( "blur-sm" );
    add_group_modal.classList.remove( "hidden" );
}