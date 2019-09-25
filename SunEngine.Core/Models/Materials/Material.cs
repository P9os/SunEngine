﻿using System;
using System.Collections.Generic;
using LinqToDB.Mapping;

namespace SunEngine.Core.Models.Materials
{
    /// <summary>
    /// Main entity for Blog post, Article, Forum post
    /// </summary>
    public class Material
    {
        public int Id { get; set; }

        /// <summary>
        /// Title for human
        /// </summary>
        public string Title { get; set; }
        /// <summary>
        /// For easy linking purposes
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// Short description for Article info
        /// </summary>
        public string SubTitle { get; set; }
        
        public string Text { get; set; }

        public int? AuthorId { get; set; }
        public User Author { get; set; }

        public int CategoryId { get; set; }
        public Category Category { get; set; }

        [Association(ThisKey = "Id", OtherKey = "MaterialId")]
        public virtual ICollection<Comment> Comments { get; set; }

        public int? LastCommentId { get; set; }
        public Comment LastComment { get; set; }

        /// <summary>
        /// наибольшая из дат последнего сообщения и самого материала
        /// </summary>
        public DateTime LastActivity { get; set; }

        public DateTime PublishDate { get; set; }
        public DateTime? EditDate { get; set; }

        /// <summary>
        /// Sorting number for manual ordering in Category
        /// </summary>
        public int SortNumber { get; set; }
        
        public bool IsCommentsBlocked { get; set; }
        
        public bool IsHidden { get; set; }
        
        /// <summary>
        /// Count of not hidden and not deleted comments
        /// </summary>
        public int CommentsCount { get; set; }

        public DateTime? DeletedDate { get; set; }

        [Association(ThisKey = "Id", OtherKey = "MaterialId")]
        public virtual ICollection<TagMaterial> TagMaterials { get; set; }
        
        public string SettingsJson { get; set; } 
        
        public int VisitsCount { get; set; }
    }
}
