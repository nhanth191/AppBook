/**
 * Copyright (c) 2014-2016, CKSource - Frederico Knabben. All rights reserved.
 * Licensed under the terms of the MIT License (see LICENSE.md).
 *
 * Simple CKEditor Widget (Part 2).
 *
 * Created out of the CKEditor Widget SDK:
 * http://docs.ckeditor.com/#!/guide/widget_sdk_tutorial_2
 */

// Register the plugin within the editor.
CKEDITOR.plugins.add( 'simplebox', {
	// This plugin requires the Widgets System defined in the 'widget' plugin.
	requires: 'widget',

	// Register the icon used for the toolbar button. It must be the same
	// as the name of the widget.
	icons: 'simplebox',

	// The plugin initialization logic goes inside this method.
	init: function( editor ) {
		// Register the editing dialog.
		CKEDITOR.dialog.add( 'simplebox', this.path + 'dialogs/simplebox.js' );

		// Register the simplebox widget.
		editor.widgets.add( 'simplebox', {
			// Allow all HTML elements, classes, and styles that this widget requires.
			// Read more about the Advanced Content Filter here:
			// * http://docs.ckeditor.com/#!/guide/dev_advanced_content_filter
			// * http://docs.ckeditor.com/#!/guide/plugin_sdk_integration_with_acf
			//allowedContent:
			//	'span(!simplebox,align-left,align-right,align-center){width};' +
			//	'span(!simplebox-content); span(!simplebox-title)',

			// Minimum HTML which is required by this widget to work.
			//requiredContent: 'span(ckeditor-plugin-highlight)',
/*
			// Define two nested editable areas.
			editables: {
				title: {
					// Define CSS selector used for finding the element inside widget element.
					selector: '.simplebox-title',
					// Define content allowed in this nested editable. Its content will be
					// filtered accordingly and the toolbar will be adjusted when this editable
					// is focused.
					allowedContent: 'br strong em'
				},
				content: {
					selector: '.simplebox-content',
					allowedContent: 'p br ul ol li strong em'
				}
			},
*/
			// Define the template of a new Simple Box widget.
			// The template will be used when creating new instances of the Simple Box widget.
			// template:
			// 	'<span class="simplebox">' +
			// 		'<span class="simplebox-title"></span>' +
			// 		' <span class="simplebox-content" style="display:none"></span>' +
			// 		' <span class="simplebox-close">x</span>' +
			// 	'</span>',
			template:
				'<span class="ckeditor-plugin-highlight">'+
					'<span class="plugin-highlight-title"></span>'+
					'<span class="plugin-highlight-content"></span>'+
					'<span class="simplebox-close">x</span>'+
				+'</span>',

			// Define the label for a widget toolbar button which will be automatically
			// created by the Widgets System. This button will insert a new widget instance
			// created from the template defined above, or will edit selected widget
			// (see second part of this tutorial to learn about editing widgets).
			//
			// Note: In order to be able to translate your widget you should use the
			// editor.lang.simplebox.* property. A string was used directly here to simplify this tutorial.
			button: 'Create a simple box',

			// Set the widget dialog window name. This enables the automatic widget-dialog binding.
			// This dialog window will be opened when creating a new widget or editing an existing one.
			dialog: 'simplebox',

			// Check the elements that need to be converted to widgets.
			//
			// Note: The "element" argument is an instance of http://docs.ckeditor.com/#!/api/CKEDITOR.htmlParser.element
			// so it is not a real DOM element yet. This is caused by the fact that upcasting is performed
			// during data processing which is done on DOM represented by JavaScript objects.
			upcast: function( element ) {
				// Return "true" (that element needs to converted to a Simple Box widget)
				// for all <span> elements with a "simplebox" class.
				return element.name == 'span' && element.hasClass( 'ckeditor-plugin-highlight' );
			},

			// When a widget is being initialized, we need to read the data ("align" and "width")
			// from DOM and set it by using the widget.setData() method.
			// More code which needs to be executed when DOM is available may go here.
			init: function() {
				/*
				var width = this.element.getStyle( 'width' );
				if ( width )
					this.setData( 'width', width );

				if ( this.element.hasClass( 'align-left' ) )
					this.setData( 'align', 'left' );
				if ( this.element.hasClass( 'align-right' ) )
					this.setData( 'align', 'right' );
				if ( this.element.hasClass( 'align-center' ) )
					this.setData( 'align', 'center' );
				*/
				//

				var selectedText = editor.getSelection().getSelectedText();
				// var elementTitle = this.element.findOne( '.simplebox-title' );
				 this.data.title = selectedText;
				// elementTitle.setText(selectedText);
                //console.log(this.element);
				var e = this.element.findOne('.plugin-highlight-title').setText(this.data.title);
			},

			// Listen on the widget#data event which is fired every time the widget data changes
			// and updates the widget's view.
			// Data may be changed by using the widget.setData() method, which we use in the
			// Simple Box dialog window.
			data: function() {
				// Check whether "width" widget data is set and remove or set "width" CSS style.
				// The style is set on widget main element (span.simplebox).
/*
					if ( this.data.width == '' )
					this.element.removeStyle( 'width' );
				else
					this.element.setStyle( 'width', this.data.width );

				// Brutally remove all align classes and set a new one if "align" widget data is set.
				this.element.removeClass( 'align-left' );
				this.element.removeClass( 'align-right' );
				this.element.removeClass( 'align-center' );
				if ( this.data.align )
					this.element.addClass( 'align-' + this.data.align );
*/				

				var eTitle = this.element.findOne('.plugin-highlight-title');
				var eContent = this.element.findOne('.plugin-highlight-content');
			
				if(this.data.title && this.data.content){
					// eTitle.setText(this.data.title);
					// eContent.setText(this.data.content);
                    eTitle.setText("undefined");
                    eContent.setText("sdfsdf");

				} 
					
				var that = this;
				var closeElement = this.element.findOne( 'span.simplebox-close' );
				if(closeElement)
					closeElement.on( 'click', function( event ) {
						 //destroys the dom of the widget
					    that.wrapper.remove();
					    //destroys widget from memory
					    CKEDITOR.instances.editor1.widgets.destroy(that, true);
						
					} );
			}
		} );
	}
} );