using Microsoft.Extensions.DependencyInjection;
using SunEngine.Presenters;

namespace SunEngine.Configuration.AddServices
{
    static internal class AddPresentersExtensions
    {
        public static void AddPresenters(this IServiceCollection services)
        {
            services.AddScoped<ArticlesPresenter>();
            services.AddScoped<BlogPresenter>();
            services.AddScoped<ForumPresenter>(); 
            services.AddScoped<MaterialsPresenter>();
            services.AddScoped<MessagesPresenter>();
            services.AddScoped<PersonalPresenter>(); 
            services.AddScoped<ProfilePresenter>();
        }
    }
}