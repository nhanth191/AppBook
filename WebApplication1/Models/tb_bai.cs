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
    
    public partial class tb_bai
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public tb_bai()
        {
            this.tb_baimau = new HashSet<tb_baimau>();
            this.tb_cauhoi = new HashSet<tb_cauhoi>();
            this.tb_templatenoidung = new HashSet<tb_templatenoidung>();
        }
    
        public int id_bai { get; set; }
        public int id_chuyende { get; set; }
        public System.DateTime ngay_tao { get; set; }
        public bool xuat_ban { get; set; }
        public int thu_tu { get; set; }
        public bool bai_mau { get; set; }
    
        public virtual tb_chuyende tb_chuyende { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tb_baimau> tb_baimau { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tb_cauhoi> tb_cauhoi { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tb_templatenoidung> tb_templatenoidung { get; set; }
    }
}
