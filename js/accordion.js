'use strict';

Array.prototype.slice.call(document.querySelectorAll('.catalogue__filter-group')).forEach(function (accordion, accordionIndex) {
    const triggerEls = document.querySelectorAll(".accordion-trigger")
    const panelEls = document.querySelectorAll(".accordion-panel")

    triggerEls.forEach((el, index)=>{
			el.setAttribute("aria-expanded", true)
			var triggerId = "accordion" + accordionIndex + "trigger" + index
			var sectId = "accordion" + accordionIndex + "sect" + index
			el.setAttribute("aria-controls", sectId)
			el.setAttribute("id", triggerId)

			
			if(panelEls[index]){
				panelEls[index].setAttribute("id", sectId)
				panelEls[index].setAttribute("role", "region")
				panelEls[index].setAttribute("aria-labelledby", triggerId)
			}
    })

  // Create the array of toggle elements for the accordion group
  var triggers = Array.prototype.slice.call(accordion.querySelectorAll('.accordion-trigger'));

  accordion.addEventListener('click', function (event) {
    var target = event.target;

    if (target.classList.contains('accordion-trigger')) {
      // Check if the current toggle is expanded.
      var isExpanded = target.getAttribute('aria-expanded') == 'true';
      

      if (!isExpanded) {
        // Set the expanded state on the triggering element
        target.setAttribute('aria-expanded', 'true');
        // Hide the accordion sections, using aria-controls to specify the desired section
        document.getElementById(target.getAttribute('aria-controls')).removeAttribute('hidden');
				target.setAttribute('aria-disabled', 'true');
        
      }
      else {
				target.setAttribute('aria-expanded', 'false');
        // Hide the accordion sections, using aria-controls to specify the desired section
        document.getElementById(target.getAttribute('aria-controls')).setAttribute('hidden', "");
				target.setAttribute('aria-disabled', 'false');
			}

      event.preventDefault();
    }
  });

  // Bind keyboard behaviors on the main accordion container
  accordion.addEventListener('keydown', function (event) {
    var target = event.target;
    var key = event.which.toString();

    // 33 = Page Up, 34 = Page Down
    var ctrlModifier = (event.ctrlKey && key.match(/33|34/));

    // Is this coming from an accordion header?
    if (target.classList.contains('accordion-trigger')) {
      // Up/ Down arrow and Control + Page Up/ Page Down keyboard operations
      // 38 = Up, 40 = Down
      if (key.match(/38|40/) || ctrlModifier) {
        var index = triggers.indexOf(target);
        var direction = (key.match(/34|40/)) ? 1 : -1;
        var length = triggers.length;
        var newIndex = (index + length + direction) % length;

        triggers[newIndex].focus();

        event.preventDefault();
      }
      else if (key.match(/35|36/)) {
        // 35 = End, 36 = Home keyboard operations
        switch (key) {
          // Go to first accordion
          case '36':
            triggers[0].focus();
            break;
            // Go to last accordion
          case '35':
            triggers[triggers.length - 1].focus();
            break;
        }
        event.preventDefault();

      }

    }
  });
});