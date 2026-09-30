// =====================================================
// STUDENTHUB4U
// EXAM UPDATES SYSTEM
// =====================================================


// =====================================================
// UPDATE DATA
// =====================================================
//
// Abhi demo system hai.
// Future me isi data ko Admin Panel + Database se
// automatically load karenge.
// =====================================================

const examUpdates = [

    /*
    Example:

    {
        id: 1,
        category: "Exam Date",
        title: "Bihar Board Exam Routine Update",
        description: "Official exam routine se related update.",
        date: "2026-09-29",
        type: "important",
        link: "#"
    }

    Real official update milne ke baad isi format me
    admin panel se add kiya jayega.
    */

];


// =====================================================
// ELEMENTS
// =====================================================

const updatesList =
    document.getElementById("updatesList");

const noUpdates =
    document.getElementById("noUpdates");

const lastUpdated =
    document.getElementById("lastUpdated");


// =====================================================
// FORMAT DATE
// =====================================================

function formatDate(dateString) {

    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
        return dateString;
    }

    return date.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );

}


// =====================================================
// CHECK NEW UPDATE
// =====================================================

function isNewUpdate(dateString) {

    const updateDate =
        new Date(dateString);

    const currentDate =
        new Date();

    const difference =
        currentDate - updateDate;

    const days =
        difference / (1000 * 60 * 60 * 24);

    return days >= 0 && days <= 7;

}


// =====================================================
// CATEGORY ICON
// =====================================================

function getCategoryIcon(category) {

    const icons = {

        "Official Notice": "📢",

        "Exam Date": "📅",

        "Admit Card": "🎫",

        "Registration": "📝",

        "Syllabus": "📚",

        "Model Paper": "📄",

        "Result": "🏆",

        "Scholarship": "🎓",

        "Deadline": "⚠️"

    };

    return icons[category] || "📌";

}


// =====================================================
// SORT UPDATES
// =====================================================

function sortUpdates() {

    examUpdates.sort(
        function(a, b) {

            return new Date(b.date) -
                   new Date(a.date);

        }
    );

}


// =====================================================
// CREATE UPDATE CARD
// =====================================================

function createUpdateCard(update) {

    const card =
        document.createElement("article");

    card.className =
        "update-card";


    // New badge

    let newBadge = "";

    if (isNewUpdate(update.date)) {

        newBadge = `
            <span class="update-new">
                NEW
            </span>
        `;

    }


    // Important badge

    let importantBadge = "";

    if (update.type === "important") {

        importantBadge = `
            <span class="update-important">
                IMPORTANT
            </span>
        `;

    }


    // Link button

    let actionButton = "";

    if (
        update.link &&
        update.link !== "#"
    ) {

        actionButton = `
            <a
                href="${update.link}"
                class="update-view-btn"
                target="_blank"
                rel="noopener noreferrer"
            >
                View Update →
            </a>
        `;

    }


    card.innerHTML = `

        <div class="update-card-top">

            <div class="update-category">

                <span class="update-icon">
                    ${getCategoryIcon(update.category)}
                </span>

                <span>
                    ${update.category}
                </span>

            </div>


            <div class="update-badges">

                ${newBadge}

                ${importantBadge}

            </div>

        </div>


        <h3>
            ${update.title}
        </h3>


        <p>
            ${update.description}
        </p>


        <div class="update-card-bottom">

            <span class="update-date">
                ${formatDate(update.date)}
            </span>

            ${actionButton}

        </div>

    `;


    return card;

}


// =====================================================
// RENDER UPDATES
// =====================================================

function renderUpdates() {

    if (!updatesList) {
        return;
    }


    updatesList.innerHTML = "";


    sortUpdates();


    // No updates

    if (examUpdates.length === 0) {

        if (noUpdates) {

            noUpdates.style.display =
                "block";

        }

        if (lastUpdated) {

            lastUpdated.textContent =
                "No official updates added yet.";

        }

        return;

    }


    // Hide empty message

    if (noUpdates) {

        noUpdates.style.display =
            "none";

    }


    // Create cards

    examUpdates.forEach(
        function(update) {

            const card =
                createUpdateCard(update);

            updatesList.appendChild(card);

        }
    );


    // Last update

    if (lastUpdated) {

        lastUpdated.textContent =
            "Latest update: " +
            formatDate(examUpdates[0].date);

    }

}


// =====================================================
// START
// =====================================================

renderUpdates();