using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace GartikPhone.Client.Components.Create
{
    public class CreateLobby
    {
        [Required]
        [StringLength(10, ErrorMessage = "Name is too long")]
        public string Username { get; set; }
        public string Round { get; set; }
        public string RoomId { get; set; }
    }
}
