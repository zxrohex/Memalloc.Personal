$(function() {
    $(".shell-window").draggable({
        handle: ".window-titlebar"
    }).resizable({
        handles: "se"
    });

    $(window).on("keydown", function (e) {
        e.preventDefault();

        if (e.ctrlKey && e.shiftKey && e.keyCode === 72) {

            $("div.desktop-shell").css({
                "background-image": "var(--b64-img)",
                "background-size": "cover"
            });
        }

    });

    /*$("[data-testrole='close']").on("click", function () {
        $(this).closest(".shell-window").remove();
    });

    $("button.window-menu").on("click", function () {
       console.log($(this).parent().closest("window-menu-container"));
    });*/
});