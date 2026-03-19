const themeToggleBtn = document.querySelector('.theme-toggle')
const rootEl = document.documentElement
const crescent = document.querySelector('.theme-toggle svg')

let isDark = localStorage.getItem('theme')


//Check local storage is set to dark mode
if (isDark === 'dark') {
    rootEl.classList.add('dark')
} else if (isDark === 'light') {
    rootEl.classList.add('light')
}


// ===================================
// EMAIL PORTFOLIO DATA
// ===================================

const emailProjects = {
    1: {
        title: "Abandoned Cart Email — Oraimo",
        image: "https://res.cloudinary.com/dimegcxft/image/upload/v1773784930/Your_Oraimo_Earpods_Are_Still_Waiting__20260118_014309_0000_xlbh6y.png",
        description: "Designed and coded a full abandoned cart email for Oraimo, a popular African tech accessories brand. The email leads with a product hero image, highlights key features using a visual benefit grid, and closes with a clear return-to-cart CTA.",
        client: "Oraimo (concept portfolio piece)",
        emailClients: "Designed for Gmail, Outlook, and Apple Mail",
        keyFeatures: "Responsive layout, product benefit grid, dual CTA placement, mobile-first structure, brand-matched color system"
    },
    2: {
        title: "Newsletter / Editorial Email — ElleStyle",
        image: "https://res.cloudinary.com/dimegcxft/image/upload/v1773784844/FB_IMG_1773784779854_ocfuqp.jpg",
        description: "Designed a weekly editorial email for ElleStyle, a confidence-driven fashion brand. The email features a bold headline section, a brand story block, and a trending products grid showcasing two categories — oversized tees and statement sneakers.",
        client: "ElleStyle (concept fashion brand)",
        emailClients: "Designed for Gmail, Outlook, and Apple Mail",
        keyFeatures: "Editorial layout, 2x2 product image grid, brand story block, strong typographic hierarchy"
    },
    3: {
        title: "Welcome / Onboarding Email — Luxewears",
        image: "https://res.cloudinary.com/dimegcxft/image/upload/v1773784843/FB_IMG_1773784769313_jabxwq.jpg",
        description: "Designed and coded a clean welcome email for Luxewears, a minimalist streetwear brand. The email opens with a bold hero image, delivers a warm brand introduction, and presents a discount code in a dedicated highlight section to drive first purchase.",
        client: "Luxewears (concept fashion brand)",
        emailClients: "Designed for Gmail, Outlook, and Apple Mail",
        keyFeatures: "Hero image, discount code highlight section, minimal layout, premium brand aesthetic"
    },
    4: {
        title: "Newsletter Email — Creatif",
        image: "https://res.cloudinary.com/dimegcxft/image/upload/v1773784843/FB_IMG_1773784792351_zmttau.jpg",
        description: "Designed a newsletter email for Creatif, a brand aimed at designers, developers, and creative professionals. The email uses a brain illustration as a visual hook, a dark contrast section to emphasize the core message, and a bullet-point section to set clear expectations before the CTA.",
        client: "Creatif (concept creator/coach brand)",
        emailClients: "Designed for Gmail, Outlook, and Apple Mail",
        keyFeatures: "Dark contrast section, illustration-led header, bullet benefit list, dual CTA blocks"
    }
};

// ===================================
// GRAPHICS PORTFOLIO DATA
// ===================================


const graphicsProjects = {
    1: {
        title: "Superman Fan Poster",
        image: "https://res.cloudinary.com/dimegcxft/image/upload/v1773916926/SUPERMAN_20251208_213653_0000_bfhemn.jpg",
        description: "A fan-made promotional poster for the Superman film directed by James Gunn. The design uses a bold tricolor panel layout — red, gold, and blue — to reflect Superman's iconic color identity. The oversized vertical text treatment and cityscape silhouette create depth and cinematic scale.",
        client: "Personal / Fan Project",
        projectType: "Poster Design",
        toolsUsed: "Canva",
        deliverables: "Social media poster (1:1 format)"
    },
    2: {
        title: "Nimelssa Health Initiative — Call for Volunteers",
        image: "https://res.cloudinary.com/dimegcxft/image/upload/v1773917152/20260204_150533_rptwsj.png",
        description: "Social media graphic designed for Nimelssa Health Initiative, a Nigerian health outreach organization. The design uses the organization's green and yellow brand colors with a bold typographic headline and a megaphone icon to drive urgency and attention for their volunteer recruitment campaign.",
        client: "Nimelssa Health Initiative",
        projectType: "Social Media Graphic",
        toolsUsed: "Canva",
        deliverables: "Instagram/Facebook post (1:1 format)"
    },
    3: {
        title: "Great Grace Vogue Villa — Services Flyer",
        image: "https://res.cloudinary.com/dimegcxft/image/upload/v1773786022/Our_services_20250424_000402_0000_io5quz.png",
        description: "Promotional flyer for Great Grace Vogue Villa, a Nigerian bespoke suit brand. The dark fabric background reinforces a luxury menswear feel, while gold typography and a structured services list communicate premium quality. Designed to drive inquiries via WhatsApp and email.",
        client: "Great Grace Vogue Villa",
        projectType: "Promotional Flyer",
        toolsUsed: "Canva",
        deliverables: "Instagram post / print-ready flyer"
    },
    4: {
        title: "World Liver Day — Awareness Graphic",
        image: "https://res.cloudinary.com/dimegcxft/image/upload/v1773786017/White_and_Red_Modern_World_Liver_Day_Instagram_Post_20250419_145355_0000_icwg87.png",
        description: "Health awareness graphic for World Liver Day, created for the Nigerian Medical Laboratory Science Students' Association (NIMELSSA), LAUTECH Chapter. The clean light background, medical illustration, and dual-logo placement create a professional public health feel appropriate for both social media and print distribution.",
        client: "NIMELSSA — LAUTECH Chapter",
        projectType: "Health Awareness Graphic",
        toolsUsed: "Canva",
        deliverables: "Social media post (1:1 format)"
    },
    5: {
        title: "Blockchain Future 2025 — Event Flyer",
        image: "https://res.cloudinary.com/dimegcxft/image/upload/v1773786016/BLOCKCHAIN_FUTURE_2025_20250406_142201_0000_aya7e6.png",
        description: "Event promotion flyer for Blockchain Future 2025, a three-day Web3 and decentralized technology conference. The dark navy grid background, teal accent colors, and circular speaker portraits create a techy, credible feel. Designed to communicate event details clearly while building anticipation.",
        client: "Blockchain Future 2025 (concept event)",
        projectType: "Event Flyer",
        toolsUsed: "Canva",
        deliverables: "Social media flyer (1:1 format)"
    },
    6: {
        title: "Seye Bàtà — Product Showcase Flyer",
        image: "https://res.cloudinary.com/dimegcxft/image/upload/v1773917052/Seye_B%C3%A0t%C3%A0_20251118_084535_0000_v0ey1d.jpg",
        description: "Product showcase flyer for Seye Bàtà, a Nigerian handcrafted shoe brand. The collage layout displays multiple product angles across a clean light background, letting the shoes speak for themselves. The Yoruba brand name is treated as a bold display headline, grounding the design in cultural identity.",
        client: "Seye Bàtà",
        projectType: "Product Flyer",
        toolsUsed: "Canva",
        deliverables: "Instagram/WhatsApp promotional flyer"
    },
    7: {
        title: "Elegance Hotel — Promotional Flyer",
        image: "https://res.cloudinary.com/dimegcxft/image/upload/v1773786022/Our_services_20250424_000402_0000_io5quz.png",
        description: "Promotional flyer for Elegance Hotel using a full-bleed bedroom photography approach. The warm amber headline and CTA button create a welcoming, premium feel without overcrowding the image. Contact details and website are anchored in a solid footer strip for clear readability.",
        client: "Elegance Hotel (concept portfolio piece)",
        projectType: "Hospitality Promotional Flyer",
        toolsUsed: "Canva",
        deliverables: "Social media flyer (4:5 format)"
    }
};

// ===================================
// EMAIL PORTFOLIO FUNCTIONALITY
// ===================================

// Get all email project links
const emailLinks = document.querySelectorAll('[data-project]');
const emailModal = document.getElementById('emailModal');

// Add click event to each email project link
if (emailLinks.length > 0) {
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.getAttribute('data-project');
            const project = emailProjects[projectId];
            
            if (project) {
                openEmailModal(project);
            }
        });
    });
}

// Function to open email modal with project data
function openEmailModal(project) {
    // Set modal content
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('previewImage').src = project.image;
    document.getElementById('projectDescription').textContent = project.description;
    document.getElementById('clientName').textContent = project.client;
    document.getElementById('emailClients').textContent = project.emailClients;
    document.getElementById('keyFeatures').textContent = project.keyFeatures;
    
    // Show modal
    emailModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Device toggle functionality (Desktop/Mobile view)
const toggleButtons = document.querySelectorAll('.toggle-btn');
const emailPreview = document.getElementById('emailPreview');

if (toggleButtons.length > 0) {
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const view = this.getAttribute('data-view');
            
            // Remove active class from all buttons
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Change preview view
            if (view === 'mobile') {
                emailPreview.classList.remove('desktop-view');
                emailPreview.classList.add('mobile-view');
            } else {
                emailPreview.classList.remove('mobile-view');
                emailPreview.classList.add('desktop-view');
            }
        });
    });
}

// ===================================
// GRAPHICS PORTFOLIO FUNCTIONALITY
// ===================================

// Get all graphics project links
const graphicsLinks = document.querySelectorAll('[data-graphic]');
const graphicsModal = document.getElementById('graphicsModal');

// Add click event to each graphics project link
if (graphicsLinks.length > 0) {
    graphicsLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const graphicId = this.getAttribute('data-graphic');
            const project = graphicsProjects[graphicId];
            
            if (project) {
                openGraphicsModal(project);
            }
        });
    });
}

// Function to open graphics modal with project data
function openGraphicsModal(project) {
    // Set modal content
    document.getElementById('graphicsModalTitle').textContent = project.title;
    document.getElementById('graphicsPreviewImage').src = project.image;
    document.getElementById('graphicsDescription').textContent = project.description;
    document.getElementById('graphicsClient').textContent = project.client;
    document.getElementById('projectType').textContent = project.projectType;
    document.getElementById('toolsUsed').textContent = project.toolsUsed;
    document.getElementById('deliverables').textContent = project.deliverables;
    
    // Show modal
    graphicsModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ===================================
// CLOSE MODAL FUNCTIONALITY
// ===================================

// Close modal when clicking the X button
const closeButtons = document.querySelectorAll('.close-modal');
closeButtons.forEach(button => {
    button.addEventListener('click', closeAllModals);
});

// Close modal when clicking outside the modal content
window.addEventListener('click', function(event) {
    if (event.target === emailModal || event.target === graphicsModal) {
        closeAllModals();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeAllModals();
    }
});

// Function to close all modals
function closeAllModals() {
    if (emailModal) {
        emailModal.classList.remove('active');
    }
    if (graphicsModal) {
        graphicsModal.classList.remove('active');
    }
    document.body.style.overflow = 'auto';
}

// ===================================
// SMOOTH SCROLLING
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});



themeToggleBtn.addEventListener('click', () => {
    if (rootEl.classList.contains('dark')) {
        rootEl.classList.remove('dark')
        rootEl.classList.add('light')
        localStorage.setItem('theme','light')
    }else {
        rootEl.classList.add('dark')
        rootEl.classList.remove('light')
        localStorage.setItem('theme','dark')
    }
})

const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
lightbox.style.cssText = `
    display: none;
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.92);
    cursor: zoom-out;
    animation: fadeIn 0.2s ease;
`;

const lightboxImg = document.createElement('img');
lightboxImg.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 90%;
    max-height: 90vh;
    object-fit: contain;
    border-radius: 4px;
    cursor: zoom-out;
`;

lightbox.appendChild(lightboxImg);
document.body.appendChild(lightbox);

// Open lightbox when preview image is clicked
function attachLightbox(imgElement) {
    imgElement.style.cursor = 'zoom-in';
    imgElement.addEventListener('click', function () {
        lightboxImg.src = this.src;
        lightbox.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
}

// Attach to email preview image
attachLightbox(document.getElementById('previewImage'));

// Attach to graphics preview image
attachLightbox(document.getElementById('graphicsPreviewImage'));

// Close lightbox
lightbox.addEventListener('click', closeLightbox);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
});

function closeLightbox() {
    lightbox.style.display = 'none';
}