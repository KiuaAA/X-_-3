package com.xclient

import java.nio.file.*

fun main() {
    println("X Client started")

    try {
        val minecraftPath = Paths.get("../Minecraft")
        if (Files.exists(minecraftPath)) {
            val watchService = FileSystems.getDefault().newWatchService()
            minecraftPath.register(
                watchService,
                StandardWatchEventKinds.ENTRY_CREATE,
                StandardWatchEventKinds.ENTRY_MODIFY,
                StandardWatchEventKinds.ENTRY_DELETE
            )

            Thread {
                try {
                    while (true) {
                        val key = watchService.take()
                        for (event in key.pollEvents()) {
                            println("Minecraft file changed: ${event.context()} (${event.kind()})")
                        }
                        key.reset()
                    }
                } catch (e: InterruptedException) {
                    Thread.currentThread().interrupt()
                }
            }.apply { isDaemon = true; start() }
        } else {
            println("Minecraft folder does not exist yet.")
        }

        // Keep the process alive
        while (true) {
            Thread.sleep(5000)
            // Background tasks: preload assets, check for updates, etc.
        }
    } catch (e: Exception) {
        e.printStackTrace()
    }
}        while (true) {
            Thread.sleep(5000)
            // Background tasks: preload assets, check for updates, etc.
        }
    } catch (e: Exception) {
        e.printStackTrace()
    }
}
