using Microsoft.EntityFrameworkCore;
using Backend.Models;

var AllowedOrigins = "_UltraRestrictivePolicy";
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors(options =>  {
    options.AddPolicy(AllowedOrigins,
        policy => {
            policy.WithOrigins("*")
                .WithMethods("PUT","POST","DELETE","GET")
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});
builder.Services.AddControllers();
builder.Services.AddDbContext<UserContext>(opt => 
    opt.UseInMemoryDatabase("Users"));
builder.Services.AddDbContext<BoardHistoryContext>(opt => 
    opt.UseInMemoryDatabase("BoardHistories"));
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(AllowedOrigins);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
