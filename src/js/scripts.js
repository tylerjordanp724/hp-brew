const water1 = '2-3 minutes off the boil (200 - 250F)';
const measure1 = '1 heaping tablespoon per cup + 1 for the pot';
const bloom = '"Bloom" the grounds by pouring water just to fully saturate the coffee.';
const brewMethods = [
    { 
        name:'french press',
        image: '',
        facts: {
            grind:'coarse',
            measure: measure1,
            water: water1,
            method:['Put ground coffee in the bottom.', bloom,' Wait 30 seconds.',' Pour remaining water to top of the frame.',' Let stand 4 minutes.'],
            extras: {
                caution: [],
                tips: [],
            }
        }


    },
    { 
        name: 'auto-drip',
        image: '',
        facts: {
            grind:'medium to fine',
            measure: '1 heaping tablespoon or cup + 1 for the pot',
            water: 'Pour in cold water',
            method: ['Pour in cold water.', 'Add coffee to filter.', 'Turn on filter.'],
            extras: {
                caution: ['Do not leave coffee on a heated base.'],
                tips: ['Metal or gold cone filters may want a slightly more coarse grind than paper.', 'Pour into a thermos to keep hot.'],
            }
        }
    },
    { 
        name:'pour-over',
        image: '',
        facts: {
            grind:'Fine to Medium-fine',
            measure: '3 heaping tabelspoons per 120z. cup',
            water: water1,
            method: [ bloom, 'Wait 30 seconds.', 'Pour water evenly over the gorunds.', 'Add more water after about half of it has drained.', 'Repaet to desired yield.'],
            extras: {
                caution: [],
                tips: [],
            }
        }
    }, 
    { 
        name: 'percolator',
        image: '',
        facts: {
            grind:'Medium to Medium-Coarse',
            measure: measure1,
            water: 'Add water to the fill line.',
            method: [
                'Add coffee to the filter basket.',
                {
                    type:'Electric Perk',
                    info:'Turn on'
                },
                {
                    type:'Stovetop',
                    info:'Turn heat to medium'
                },
                {
                    type:'Gas Stove',
                    info:'Flame should not creep up on sides'
                },
                {
                    type:'Electric Stove',
                    info:'Pre-heat stovetop first. Once "perking" begins, continue for 3 - 4 minutes. Remove from heat. Remove filter basket before pouring.'
                }

        
            ],
            extras: {
                caution: [],
                tips: [],
            }
        } 
    },
    { 
        name: 'stovetop espresso',
        image: '',
        facts: {
            grind:'Fine (not espresso)',
            measure: 'Fill the filter chamber and gently level grounds. Do not pack.',
            water: 'To the bottom of the pressure release valve.',
            method: [
                'Turn heat to medium',
                {
                    type:'Gas Stove',
                    info:'Flame should not creep up on sides'
                },
                {
                    type:'Electric Stove',
                    info:'Pre-heat stovetop first. Once "perking" begins, continue for 3 - 4 minutes. Remove from heat. Remove filter basket before pouring.'
                }
        
            ],
            extras: {
                caution: [],
                tips: [],
            }
        }
        
    }, 
    { 
        name: 'chemex',
        image: '',
        facts: {
            grind:'Medium to Medium-Coarse',
            measure: measure1,
            water: water1,
            method: ['Wet the filter with hot water inside the vessel, then pour out excess water.', bloom, 'Wait 30 seconds.', 'Pour water evenly over grounds to fill cone. Repeat as needed until coffee reaches the bump.'],
            extras: {
                caution: [],
                tips: [],
            }
        }

    }
];

const markup = `
<div>
    <ul> 
    ${brewMethods.map(brew => `
        <li class="brew">
            <h2>${brew.name}</h2>
            <p><strong>grind:</strong> ${brew.facts.grind}</p>
        </li>
        `).join('')}
    </ul>
    
</div>`;

document.body.innerHTML = markup;

$(document).ready(function(){
    const $brew = $('.brew');

    $brew.each(function(){
        $(this).children('p').hide();
    });

    $brew.click(function() {
        $(this).children('p').toggle();
    });
});