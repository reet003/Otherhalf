
        // Ingredient data organized by letter
        const ingredientData = {
            A: [
                {
                    title: "Collagen (Bovine)",
                    description: "A structural protein sourced from bovine connective tissue.",
                    benefits: "Collagen supports joint elasticity, cartilage regeneration, and can slow degenerative joint issues like arthritis.",
                    image: "./assets/image.png"
                },
                {
                    title: "Alpha-Lipoic Acid",
                    description: "A potent antioxidant that works in both water and fat-soluble environments.",
                    benefits: "Helps protect cells from oxidative stress and supports healthy aging processes.",
                    image: "./assets/image3.png"
                },
                {
                    title: "GlucosaGreen® (Vegetarian Glucosamine)",
                    description: "A potent antioxidant that works in both water and fat-soluble environments.",
                    benefits: "Helps protect cells from oxidative stress and supports healthy aging processes.",
                    image: "./assets/image1.png"
                },
                {
                    title: "Alpha-Lipoic Acid",
                    description: "A potent antioxidant that works in both water and fat-soluble environments.",
                    benefits: "Helps protect cells from oxidative stress and supports healthy aging processes.",
                    image: "./assets/image4.png"
                },
                {
                    title: "Alpha-Lipoic Acid",
                    description: "A potent antioxidant that works in both water and fat-soluble environments.",
                    benefits: "Helps protect cells from oxidative stress and supports healthy aging processes.",
                    image: "./assets/image2.png"
                },
                {
                    title: "Alpha-Lipoic Acid",
                    description: "A potent antioxidant that works in both water and fat-soluble environments.",
                    benefits: "Helps protect cells from oxidative stress and supports healthy aging processes.",
                    image: "./assets/image5.png"
                },
               
                
            ],
            B: [
                {
                    title: "Biotin (Vitamin B7)",
                    description: "An essential B-vitamin crucial for metabolic processes.",
                    benefits: "Supports healthy skin, coat, and nail growth while aiding in energy metabolism.",
                    image: "./assets/image2.png"
                },
                {
                    title: "Beta-Carotene",
                    description: "A precursor to Vitamin A found in orange and yellow vegetables.",
                    benefits: "Supports eye health, immune function, and acts as a natural antioxidant.",
                    image: "./assets/image4.png"
                }
            ],
            C: [
                {
                    title: "Collagen (Bovine)",
                    description: "A structural protein sourced from bovine connective tissue.",
                    benefits: "Collagen supports joint elasticity, cartilage regeneration, and can slow degenerative joint issues like arthritis.",
                   image: "./assets/image.png"
                },
               
            ],
            D: [
                {
                    title: "DHA (Docosahexaenoic Acid)",
                    description: "An omega-3 fatty acid essential for brain and eye development.",
                    benefits: "Supports cognitive function, brain health, and proper retinal development.",
                    image: "./assets/image5.png"
                }
            ],
            E: [
                {
                    title: "EPA (Eicosapentaenoic Acid)",
                    description: "An omega-3 fatty acid with powerful anti-inflammatory properties.",
                    benefits: "Reduces inflammation, supports heart health, and promotes healthy skin and coat.",
                   image: "./assets/image3.png"
                }
            ],
            F: [
                {
                    title: "Folic Acid (Vitamin B9)",
                    description: "An essential B-vitamin important for cell division and DNA synthesis.",
                    benefits: "Supports healthy cell growth, immune function, and proper neurological development.",
                    image: "https://images.unsplash.com/photo-1560743173-567a3b5658b1?w=400&h=400&fit=crop"
                }
                
            ],
            G: [
                {
                    title: "GlucosaGreen® (Vegetarian Glucosamine)",
                    description: "A plant-based glucosamine alternative derived via fermentation.",
                    benefits: "Supports cartilage repair and reduces joint inflammation — ideal for dogs with shellfish allergies.",
                    image: "./assets/image3.png"
                }
            ],
            H: [
                {
                    title: "Hyaluronic Acid",
                    description: "A natural substance that helps maintain moisture in joints and skin.",
                    benefits: "Supports joint lubrication, skin hydration, and overall joint health.",
                    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=400&fit=crop"
                }
            ],
            I: [
                {
                    title: "Iron (Chelated)",
                    description: "An essential mineral in a highly absorbable chelated form.",
                    benefits: "Supports healthy blood formation, oxygen transport, and energy metabolism.",
                    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop"
                }
            ],
            J: [],
            K: [
                {
                    title: "Kelp (Ascophyllum nodosum)",
                    description: "A nutrient-rich seaweed providing natural minerals and vitamins.",
                    benefits: "Supports thyroid function, provides natural iodine, and offers trace minerals.",
                    image: "https://images.unsplash.com/photo-1560743173-567a3b5658b1?w=400&h=400&fit=crop"
                }
            ],
            L: [
                {
                    title: "L-Carnitine",
                    description: "An amino acid that helps transport fatty acids into cellular mitochondria.",
                    benefits: "Supports heart health, energy metabolism, and healthy weight management.",
                    image: "https://images.unsplash.com/photo-1574316071802-0d684efa0ba5?w=400&h=400&fit=crop"
                }
            ],
            M: [
                {
                    title: "Methylsulfonylmethane (MSM)",
                    description: "A highly pure, bioavailable form of MSM — a natural sulfur compound.",
                    benefits: "Reduces joint pain and inflammation, supports connective tissue, and enhances mobility.",
                    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=400&fit=crop"
                }
            ],
            N: [
                {
                    title: "Niacin (Vitamin B3)",
                    description: "An essential B-vitamin important for energy metabolism.",
                    benefits: "Supports healthy skin, nervous system function, and proper digestion.",
                    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop"
                }
            ],
            O: [
                {
                    title: "OptiMSM® (Methylsulfonylmethane)",
                    description: "A highly pure, bioavailable form of MSM — a natural sulfur compound.",
                    benefits: "Reduces joint pain and inflammation, supports connective tissue, and enhances mobility.",
                    image: "https://images.unsplash.com/photo-1560743173-567a3b5658b1?w=400&h=400&fit=crop"
                }
            ],
            P: [
                {
                    title: "Probiotics (Multi-strain)",
                    description: "Beneficial bacteria that support digestive and immune health.",
                    benefits: "Promotes healthy gut flora, supports immune function, and aids in nutrient absorption.",
                    image: "https://images.unsplash.com/photo-1574316071802-0d684efa0ba5?w=400&h=400&fit=crop"
                }
            ],
            Q: [
                {
                    title: "Quercetin",
                    description: "A natural flavonoid with powerful antioxidant and anti-inflammatory properties.",
                    benefits: "Supports immune function, reduces inflammation, and acts as a natural antihistamine.",
                    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=400&fit=crop"
                }
            ],
            R: [
                {
                    title: "Rephyll® (Black Pepper Extract)",
                    description: "A patented form of black pepper extract (piperine).",
                    benefits: "Enhances the absorption and bioavailability of other joint ingredients like turmeric and MSM.",
                    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop"
                }
            ],
            S: [
                {
                    title: "Spirulina",
                    description: "A nutrient-dense blue-green algae superfood.",
                    benefits: "Provides protein, vitamins, minerals, and antioxidants to support overall health.",
                    image: "https://images.unsplash.com/photo-1560743173-567a3b5658b1?w=400&h=400&fit=crop"
                }
            ],
            T: [
                {
                    title: "Turmeric Root",
                    description: "A golden spice packed with curcumin, a powerful anti-inflammatory compound.",
                    benefits: "Helps reduce stiffness and chronic inflammation associated with arthritis and aging.",
                    image: "https://images.unsplash.com/photo-1574316071802-0d684efa0ba5?w=400&h=400&fit=crop"
                }
            ],
            U: [],
            V: [
                {
                    title: "Vitamin E (Mixed Tocopherols)",
                    description: "A fat-soluble vitamin and powerful antioxidant.",
                    benefits: "Protects cell membranes from oxidative damage and supports immune function.",
                    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=400&fit=crop"
                }
            ],
            W: [],
            X: [],
            Y: [
                {
                    title: "Yucca Extract",
                    description: "A natural extract from the yucca plant with anti-inflammatory properties.",
                    benefits: "Helps reduce joint inflammation and supports digestive health.",
                    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop"
                }
            ],
            Z: [
                {
                    title: "Zinc (Chelated)",
                    description: "An essential trace mineral in a highly absorbable chelated form.",
                    benefits: "Supports immune function, skin health, and proper wound healing.",
                    image: "https://images.unsplash.com/photo-1560743173-567a3b5658b1?w=400&h=400&fit=crop"
                }
            ]
        };

        // Current active letter
        let currentLetter = 'A';

        // DOM elements
        const alphabetLetters = document.querySelectorAll('.alphabet-letter');
        const ingredientsContainer = document.getElementById('ingredientsContainer');

        // Initialize the page
        function init() {
            loadIngredients(currentLetter);
            setupEventListeners();
        }

        // Setup event listeners for alphabet navigation
        function setupEventListeners() {
            alphabetLetters.forEach(letter => {
                letter.addEventListener('click', function() {
                    const selectedLetter = this.getAttribute('data-letter');
                    selectLetter(selectedLetter);
                });
            });
        }

        // Select a letter and update the display
        function selectLetter(letter) {
            if (letter === currentLetter) return;

            // Update active state
            alphabetLetters.forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-letter') === letter) {
                    btn.classList.add('active');
                }
            });

            currentLetter = letter;
            loadIngredients(letter);
        }

        // Load ingredients for a specific letter
        function loadIngredients(letter) {
            const ingredients = ingredientData[letter] || [];
            
            // Show loading state
            ingredientsContainer.innerHTML = '<div class="loading">Loading ingredients...</div>';
            
            // Simulate loading delay for better UX
            setTimeout(() => {
                if (ingredients.length === 0) {
                    ingredientsContainer.innerHTML = `
                        <div class="no-ingredients">
                            No ingredients found for letter "${letter}". 
                            <br>Check back soon as we continue to expand our ingredient database!
                        </div>
                    `;
                } else {
                    renderIngredients(ingredients);
                }
            }, 200);
        }

        // Render ingredients in the grid
        function renderIngredients(ingredients) {
            let html = '';
            
            // Group ingredients in rows of 2
            for (let i = 0; i < ingredients.length; i += 2) {
                html += '<div class="ingredients-row">';
                
                // First ingredient in the row
                html += createIngredientCard(ingredients[i]);
                
                // Second ingredient in the row (if exists)
                if (i + 1 < ingredients.length) {
                    html += createIngredientCard(ingredients[i + 1]);
                }
                
                html += '</div>';
            }
            
            ingredientsContainer.innerHTML = html;
            ingredientsContainer.classList.add('fade-in');
            
            // Remove animation class after animation completes
            setTimeout(() => {
                ingredientsContainer.classList.remove('fade-in');
            }, 300);

            // Setup read more functionality
            setupReadMoreListeners();
        }

        // Create HTML for a single ingredient card
        function createIngredientCard(ingredient) {
            return `
                <div class="ingredient-card">
                    <div class="ingredient-image" style="background-image: url('${ingredient.image}')"></div>
                    <div class="ingredient-content">
                        <h3 class="ingredient-title">${ingredient.title}</h3>
                        <p class="ingredient-description">${ingredient.description}</p>
                        <div class="ingredient-benefits">
                            <ul>
                                <li>${ingredient.benefits}</li>
                            </ul>
                        </div>
                        <button class="read-more" onclick="handleReadMore('${ingredient.title}')">READ MORE</button>
                    </div>
                </div>
            `;
        }

        // Setup read more button listeners
        function setupReadMoreListeners() {
            const readMoreButtons = document.querySelectorAll('.read-more');
            readMoreButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const title = this.getAttribute('onclick').match(/'([^']+)'/)[1];
                    handleReadMore(title);
                });
            });
        }

        // Handle read more button clicks
        function handleReadMore(ingredientTitle) {
            alert(`More information about ${ingredientTitle} would be displayed here. This could open a modal, navigate to a detailed page, or expand the card content.`);
        }

        // Handle keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key >= 'A' && e.key <= 'Z') {
                selectLetter(e.key.toUpperCase());
            } else if (e.key >= 'a' && e.key <= 'z') {
                selectLetter(e.key.toUpperCase());
            }
        });

        // Initialize the application
        document.addEventListener('DOMContentLoaded', init);
