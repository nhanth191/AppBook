//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebApplication1.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class tb_templatenoidungtext_format
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public tb_templatenoidungtext_format()
        {
            this.tb_templatenoidung_text = new HashSet<tb_templatenoidung_text>();
        }
    
        public int id_format { get; set; }
        public int id_templatenoidungtext { get; set; }
        public string ckeditor_text_format { get; set; }
        public string template_width { get; set; }
        public string template_heigth { get; set; }
        public string template_alignment { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tb_templatenoidung_text> tb_templatenoidung_text { get; set; }
    }
}