namespace Portfolio.Models;

public class Project
{
    public string Title { get; set; } = "";
    public string Description { get; set; } = "";
    public string Type { get; set; } = "";
    public List<string> Tech { get; set; } = new();
    public string? Link { get; set; }
}