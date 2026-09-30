// =====================================================
// STUDENTHUB4U
// MENU + SETTINGS + THEME SYSTEM
// =====================================================


// =========================
// ELEMENTS
// =========================

const menuButton = document.getElementById("menuButton");
const closeButton = document.getElementById("closeButton");
const sideMenu = document.getElementById("sideMenu");
const menuOverlay = document.getElementById("menuOverlay");

const settingsButton = document.getElementById("settingsButton");
const settingsPanel = document.getElementById("settingsPanel");
const settingsBack = document.getElementById("settingsBack");

const darkMode = document.getElementById("darkMode");
const lightMode = document.getElementById("lightMode");

const textSmall = document.getElementById("textSmall");
const textNormal = document.getElementById("textNormal");
const textLarge = document.getElementById("textLarge");

const resetSettings = document.getElementById("resetSettings");


// =========================
// OPEN SIDE MENU
// =========================

function openMenu() {

    if (!sideMenu || !menuOverlay) {
        return;
    }

    sideMenu.classList.add("active");

    menuOverlay.classList.add("active");

    document.body.classList.add("menu-open");

}


// =========================
// CLOSE SIDE MENU
// =========================

function closeMenu() {

    if (!sideMenu || !menuOverlay) {
        return;
    }

    sideMenu.classList.remove("active");

    menuOverlay.classList.remove("active");

    document.body.classList.remove("menu-open");

}


// =========================
// MENU BUTTON
// =========================

if (menuButton) {

    menuButton.addEventListener(
        "click",
        openMenu
    );

}


// =========================
// CLOSE BUTTON
// =========================

if (closeButton) {

    closeButton.addEventListener(
        "click",
        closeMenu
    );

}


// =========================
// OVERLAY CLICK
// =========================

if (menuOverlay) {

    menuOverlay.addEventListener(
        "click",
        closeMenu
    );

}


// =========================
// ESC KEY
// =========================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeMenu();

        }

    }
);


// =========================
// SIDE MENU LINKS
// =========================

const sideLinks =
    document.querySelectorAll(
        ".side-menu a"
    );


sideLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                closeMenu();

            }
        );

    }
);


// =====================================================
// SETTINGS PANEL
// =====================================================


// =========================
// OPEN SETTINGS
// =========================

if (settingsButton) {

    settingsButton.addEventListener(
        "click",
        function () {

            if (settingsPanel) {

                settingsPanel.classList.add(
                    "active"
                );

            }

        }
    );

}


// =========================
// BACK FROM SETTINGS
// =========================

if (settingsBack) {

    settingsBack.addEventListener(
        "click",
        function () {

            if (settingsPanel) {

                settingsPanel.classList.remove(
                    "active"
                );

            }

        }
    );

}


// =====================================================
// THEME SYSTEM
// =====================================================


// =========================
// APPLY THEME
// =========================

function applyTheme(theme) {

    if (theme === "light") {

        document.body.classList.add(
            "light-theme"
        );

    } else {

        document.body.classList.remove(
            "light-theme"
        );

    }


    // Update buttons

    if (darkMode) {

        darkMode.classList.remove(
            "active"
        );

    }


    if (lightMode) {

        lightMode.classList.remove(
            "active"
        );

    }


    if (theme === "light") {

        if (lightMode) {

            lightMode.classList.add(
                "active"
            );

        }

    } else {

        if (darkMode) {

            darkMode.classList.add(
                "active"
            );

        }

    }


    // Save theme

    localStorage.setItem(
        "studentHubTheme",
        theme
    );

}


// =========================
// DARK MODE
// =========================

if (darkMode) {

    darkMode.addEventListener(
        "click",
        function () {

            applyTheme("dark");

        }
    );

}


// =========================
// LIGHT MODE
// =========================

if (lightMode) {

    lightMode.addEventListener(
        "click",
        function () {

            applyTheme("light");

        }
    );

}


// =====================================================
// TEXT SIZE
// =====================================================


// =========================
// APPLY TEXT SIZE
// =========================

function applyTextSize(size) {


    document.body.classList.remove(
        "text-small",
        "text-normal",
        "text-large"
    );


    if (size === "small") {

        document.body.classList.add(
            "text-small"
        );

    }


    if (size === "normal") {

        document.body.classList.add(
            "text-normal"
        );

    }


    if (size === "large") {

        document.body.classList.add(
            "text-large"
        );

    }


    // Remove active

    if (textSmall) {

        textSmall.classList.remove(
            "active"
        );

    }


    if (textNormal) {

        textNormal.classList.remove(
            "active"
        );

    }


    if (textLarge) {

        textLarge.classList.remove(
            "active"
        );

    }


    // Add active

    if (size === "small" && textSmall) {

        textSmall.classList.add(
            "active"
        );

    }


    if (size === "normal" && textNormal) {

        textNormal.classList.add(
            "active"
        );

    }


    if (size === "large" && textLarge) {

        textLarge.classList.add(
            "active"
        );

    }


    // Save setting

    localStorage.setItem(
        "studentHubTextSize",
        size
    );

}


// =========================
// SMALL TEXT
// =========================

if (textSmall) {

    textSmall.addEventListener(
        "click",
        function () {

            applyTextSize("small");

        }
    );

}


// =========================
// NORMAL TEXT
// =========================

if (textNormal) {

    textNormal.addEventListener(
        "click",
        function () {

            applyTextSize("normal");

        }
    );

}


// =========================
// LARGE TEXT
// =========================

if (textLarge) {

    textLarge.addEventListener(
        "click",
        function () {

            applyTextSize("large");

        }
    );

}


// =====================================================
// RESET SETTINGS
// =====================================================

if (resetSettings) {

    resetSettings.addEventListener(
        "click",
        function () {


            // Reset theme

            applyTheme("dark");


            // Reset text

            applyTextSize("normal");


            // Close settings

            if (settingsPanel) {

                settingsPanel.classList.remove(
                    "active"
                );

            }

        }
    );

}


// =====================================================
// LOAD SAVED SETTINGS
// =====================================================


// Saved theme

const savedTheme =
    localStorage.getItem(
        "studentHubTheme"
    );


// Saved text size

const savedTextSize =
    localStorage.getItem(
        "studentHubTextSize"
    );


// Apply saved theme

if (savedTheme === "light") {

    applyTheme("light");

} else {

    applyTheme("dark");

}


// Apply saved text size

if (
    savedTextSize === "small" ||
    savedTextSize === "large" ||
    savedTextSize === "normal"
) {

    applyTextSize(
        savedTextSize
    );

} else {

    applyTextSize(
        "normal"
    );

}/* =========================================
   HEADER THEME SYSTEM
========================================= */

const darkModeButton = document.getElementById("darkMode");
const lightModeButton = document.getElementById("lightMode");

function applyWebsiteTheme(theme) {

    if (theme === "light") {

        document.body.classList.add("light-theme");

        if (lightModeButton) {
            lightModeButton.classList.add("active");
        }

        if (darkModeButton) {
            darkModeButton.classList.remove("active");
        }

    } else {

        document.body.classList.remove("light-theme");

        if (darkModeButton) {
            darkModeButton.classList.add("active");
        }

        if (lightModeButton) {
            lightModeButton.classList.remove("active");
        }
    }

    localStorage.setItem("websiteTheme", theme);
}


/* Dark */

if (darkModeButton) {

    darkModeButton.addEventListener("click", function () {

        applyWebsiteTheme("dark");

    });
}


/* Light */

if (lightModeButton) {

    lightModeButton.addEventListener("click", function () {

        applyWebsiteTheme("light");

    });
}


/* Saved Theme */

const savedTheme =
    localStorage.getItem("websiteTheme") || "dark";

applyWebsiteTheme(savedTheme);