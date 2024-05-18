class WindowManager {
    name;
    visible;
    $element;
    $windowButtonElement;
    $taskbarItemElement;

    constructor(name, visible = true) {
        this.name = name;

        this.visible = visible;

        this.$element = $(".shell-window[data-window='" + name + "']");

        this.$windowButtonElement = this.$element.find("button.window-menu");

        this.$taskbarItemElement = $(".taskbar-item[data-window='" + name + "']");

        this.initUI();

        this.attachEventHandlers();
    }

    initUI() {
        this.$element.draggable({
            handle: ".window-titlebar"
        }).resizable({
            handles: "se"
        });

        if (this.visible) {
            this.$element.show();

            this.$taskbarItemElement.hide();
        }
        else {
            this.$element.hide();

            this.$taskbarItemElement.show();
        }
    }

    attachEventHandlers() {
        this.$windowButtonElement.on("click", () => {
            this.toggleWindow();
        });

        this.$taskbarItemElement.on("click", () => {
           this.toggleWindow();
        });
    }

    toggleWindow() {
        this.$element.toggle();

        this.$taskbarItemElement.toggle();

        this.visible = !this.visible;
    }
}

function getWindow(name) {
    return $(".shell-window[data-window='" + name + "']");
}

function getWindowTbItem(name) {
    return $(".taskbar-item[data-window='" + name + "']");
}

/*function toggleWindow(name) {
    getWindow(name).toggle();

    getWindowTbItem(name).toggle();
}*/

jQuery.fn.extend({
    /*toggleWindow: function () {
        var name = $(this).data("window");

        toggleWindow(name);
    }*/

});

function test() {
    var shellWindow = $(`<div class="shell-window" data-window="test">
						<div class="window-titlebar">
							<button class="window-menu">
								-
							</button>

							<div class="window-menu-container">
								<div class="window-menu-content">
									<button class="window-menu-item" data-testrole="close">
										Close
									</button>
								</div>
							</div>

							<h6 class="window-title">test</h6>
						</div>

						<div class="window-content">
							<textarea class="notepad-textarea" readonly>
								Lol
							</textarea>
						</div>
					</div>`);

    $("div.desktop-shell").append(shellWindow);
}

$(function () {
    //test();

    var test = new WindowManager("main");

    var test2 = new WindowManager("about", false);


    $(window).on("keydown", function (e) {
        e.preventDefault();

        if (e.ctrlKey && e.shiftKey && e.keyCode === 72) {

            $("div.desktop-shell").css({
                "background-image": "var(--b64-img)",
                "background-size": "cover"
            });
        }

    });

   /*$(".taskbar-item").on("click", function () {
        $(this).toggleWindow();
    });

    $("button.window-menu").on("click", function () {
        $(this).toggleWindow();
    });*/

    /*$("[data-testrole='close']").on("click", function () {
        $(this).closest(".shell-window").remove();
    });*/

    /*$("button.window-menu").on("click", function () {
       console.log($(this).parent().closest("window-menu-container"));
    });*/
});