const asyncHandler = (asyncHandler) => async (req , res , next) => 
    {
        try {
            await asyncHandler(req , res , next)
        } catch (error) {
            res.status(err.code || 500).json({
                success: false,
                message: err.message
            })
        }
    }