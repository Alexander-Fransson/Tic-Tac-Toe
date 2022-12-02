using Microsoft.EntityFrameworkCore;

namespace Backend.Models;

public class BoardHistoryContext : DbContext
{
    public BoardHistoryContext(DbContextOptions<BoardHistoryContext> options)
        : base(options)
    {
    }

    public DbSet<BoardHistory> BoardHistories = null!;
}