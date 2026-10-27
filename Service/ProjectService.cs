using System.Text.Json;
using Portfolio.Models;

namespace Portfolio.Services;

public class ProjectService
{
    private readonly IWebHostEnvironment _env;

    public ProjectService(IWebHostEnvironment env) => _env = env;

    public async Task<List<Project>> GetAllAsync()
    {
        try
        {
            var path = Path.Combine(_env.WebRootPath, "data", "projects.json");
            var json = await File.ReadAllTextAsync(path);
            return JsonSerializer.Deserialize<List<Project>>(json,
                new JsonSerializerOptions { PropertyNameCaseInsensitive = true }) ?? new();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Could not load projects: {ex.Message}");
            return new();
        }
    }
}