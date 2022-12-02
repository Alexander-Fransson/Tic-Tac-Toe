using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Models;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BoardHistoryController : ControllerBase
    {
        private readonly BoardHistoryContext _context;

        public BoardHistoryController(BoardHistoryContext context)
        {
            _context = context;
        }

        // GET: api/BoardHistory
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BoardHistory>>> GetBoardHistories()
        {
          if (_context.BoardHistories == null)
          {
              return NotFound();
          }
            return await _context.BoardHistories.ToListAsync();
        }

        // GET: api/BoardHistory/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BoardHistory>> GetBoardHistory(long id)
        {
          if (_context.BoardHistories == null)
          {
              return NotFound();
          }
            var boardHistory = await _context.BoardHistories.FindAsync(id);

            if (boardHistory == null)
            {
                return NotFound();
            }

            return boardHistory;
        }

        // PUT: api/BoardHistory/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBoardHistory(long id, BoardHistory boardHistory)
        {
            if (id != boardHistory.Id)
            {
                return BadRequest();
            }

            _context.Entry(boardHistory).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BoardHistoryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/BoardHistory
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BoardHistory>> PostBoardHistory(BoardHistory boardHistory)
        {
          if (_context.BoardHistories == null)
          {
              return Problem("Entity set 'BoardHistoryContext.BoardHistories'  is null.");
          }
            _context.BoardHistories.Add(boardHistory);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBoardHistory", new { id = boardHistory.Id }, boardHistory);
        }

        // DELETE: api/BoardHistory/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBoardHistory(long id)
        {
            if (_context.BoardHistories == null)
            {
                return NotFound();
            }
            var boardHistory = await _context.BoardHistories.FindAsync(id);
            if (boardHistory == null)
            {
                return NotFound();
            }

            _context.BoardHistories.Remove(boardHistory);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BoardHistoryExists(long id)
        {
            return (_context.BoardHistories?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
